#!/usr/bin/env bash
# Кодирование промо-роликов для сайта → public/video/
# Использование: FFMPEG=/path/to/ffmpeg scripts/encode-video.sh <тизер.mp4>
set -euo pipefail

FFMPEG="${FFMPEG:-ffmpeg}"
TEASER="$1"
OUT="$(dirname "$0")/../public/video"
mkdir -p "$OUT"

TEASER_CRF="${TEASER_CRF:-26}"

# Тизер: без звука, 1080p и 720p (для телефонов) H.264.
# VP9 не используется: файл не меньше H.264, а сборка libvpx из Remotion давала ошибку декодирования
"$FFMPEG" -y -v error -i "$TEASER" -an -c:v libx264 -crf "$TEASER_CRF" -preset slow -pix_fmt yuv420p \
  -movflags +faststart "$OUT/teaser-1080.mp4"
"$FFMPEG" -y -v error -i "$TEASER" -an -vf scale=1280:-2 -c:v libx264 -crf "$TEASER_CRF" -preset slow \
  -pix_fmt yuv420p -movflags +faststart "$OUT/teaser-720.mp4"

# Постер
"$FFMPEG" -y -v error -ss 1 -i "$TEASER" -frames:v 1 -q:v 4 "$OUT/teaser-poster.jpg"

ls -la "$OUT"
