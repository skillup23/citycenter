import { womenClothing } from '../data/womenClothing';

export default function butikHandler(req, res) {
  console.log(req);
  const { query } = req;
  const { id } = query;
  const person = womenClothing.find((p) => p.id === id);

  // User with id exists
  return person
    ? res.status(200).json(person)
    : res.status(404).json({ message: `User with id: ${id} not found.` });
}
