import { womenClothing } from './data/womenClothing';

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(womenClothing);
  }
}
