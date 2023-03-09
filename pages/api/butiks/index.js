import { womenClothing } from '../../../public/data/womenClothing';

export default function handler(req, res) {
  res.status(200).json(womenClothing);
}
