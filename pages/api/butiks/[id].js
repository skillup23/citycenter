import { womenClothing } from '../../../public/data/womenClothing';

export default function handler(req, res) {
  const { id } = req.query;
  const butik = womenClothing.find((butik) => butik.id === parseInt(id));
  res.status(200).json(butik);
}
