import { butiks } from '../../../public/data/butiks';

export default function handler(req, res) {
  const { id } = req.query;
  const butik = butiks.find((butik) => butik.id === parseInt(id));
  res.status(200).json(butik);
}
