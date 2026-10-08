# Выкладка ветки `audit-fixes` на сервер

Сервер: Timeweb Cloud `myFirst`, 185.154.192.9, Ubuntu, 1 CPU / 1 ГБ RAM / 15 ГБ.
Проект: `/home/citycenter`, процесс pm2 `citycenter` (порт 3000), nginx перед ним.
Код приходит на сервер через `git pull` из `github.com/skillup23/citycenter`.

На сервере в `/home/citycenter/.env` есть несохранённая в git правка — при `git pull` её не трогать
(git сам её сохранит, если файл не меняется в ветке; эта ветка `.env` не меняет).

## 1. Код

Ветку нужно отправить в репозиторий разработчика (нужен доступ к `skillup23/citycenter`):

```bash
git push origin audit-fixes
```

На сервере. Сборка идёт прямо в папке работающего сайта и на 1 ГБ памяти может упасть,
поэтому сначала включите swap (один раз, если его ещё нет — проверка: `swapon --show`):

```bash
fallocate -l 1G /swapfile && chmod 600 /swapfile && mkswap /swapfile && swapon /swapfile
```

Запомните текущую версию — к ней можно вернуться:

```bash
cd /home/citycenter
git rev-parse --abbrev-ref HEAD    # обычно main
```

Выкладка (на время сборки сайт может отвечать ошибками — выбирайте тихое время):

```bash
git fetch origin
git checkout audit-fixes        # или merge в main, если так договоритесь с разработчиком
npm ci
npm run build                   # перед сборкой сам создаст public/sitemap.xml
pm2 restart citycenter
```

Проверка: главная (тизер, затем два баннера), любая карточка бутика, `/sitemap.xml`,
`curl -sI https://www.citycenter.ru/video/teaser-poster.jpg` → 200.

Откат, если что-то не так:

```bash
git checkout main && npm ci && npm run build && pm2 restart citycenter
```

## 2. nginx

Сначала убедитесь, что в старом файле нет других сайтов — новый файл заменяет его целиком:

```bash
grep -n server_name /etc/nginx/sites-enabled/*     # должны быть только citycenter.ru www.citycenter.ru
grep -n server_tokens /etc/nginx/nginx.conf        # если там уже есть «server_tokens off;» без #, удалите эту строку из deploy/nginx-citycenter.conf
```

```bash
cp /etc/nginx/sites-enabled/default /root/nginx-default.backup
certbot certificates            # сертификат должен покрывать citycenter.ru и www.citycenter.ru
cp deploy/nginx-citycenter.conf /etc/nginx/sites-enabled/default
nginx -t                        # обязательно: «syntax is ok» и «test is successful»
systemctl reload nginx
```

Если `nginx -t` ругается — вернуть копию: `cp /root/nginx-default.backup /etc/nginx/sites-enabled/default`.

Проверка:

```bash
curl -sI http://citycenter.ru/contacts | grep -i -E "^HTTP|location"     # 301 → https://www.citycenter.ru/contacts
curl -sI https://citycenter.ru/ | grep -i -E "^HTTP|location"            # 301 → https://www.citycenter.ru/
curl -sI https://www.citycenter.ru/ | grep -i -E "^HTTP|strict|server"   # 200, HSTS, Server без версии
```

HSTS нельзя быстро отменить: браузеры посетителей год будут открывать сайт только по https.
Включать после того, как https-версия проверена.

## 3. Частые перезапуски процесса (пункт 23)

`pm2 list` показывал 605 перезапусков `citycenter`. Чтобы найти причину, на сервере (только чтение):

```bash
pm2 describe citycenter | grep -i -E "restarts|uptime|exec mode|node.js version|script args"
pm2 logs citycenter --lines 200 --nostream
free -m
dmesg | grep -i -E "killed process|out of memory" | tail
```

Вероятные причины, которые уже устранены в этой ветке:

- карточки бутиков и сервисов делали HTTP-запрос к самому сайту на каждый просмотр
  (`fetch(process.env.API_HOST + '/butiks/…')`); при недоступности адреса — ошибка 500.
  Теперь данные читаются из `public/data/butiks.js`, лишнего запроса нет.

Если в `dmesg` есть `Out of memory: Killed process … node` — процессу не хватает памяти.
Тогда: swap (см. выше) и перезапуск процесса с ограничением памяти —
старый процесс сначала удаляется, иначе их станет два на одном порту:

```bash
pm2 delete citycenter
pm2 start npm --name citycenter --max-memory-restart 600M -- start
pm2 save
```
