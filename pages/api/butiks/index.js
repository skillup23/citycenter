import { butiks } from '../../../public/data/butiks';

export default function handler(req, res) {
  res.status(200).json(butiks);
}
