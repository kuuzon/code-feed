import { news } from '../../db';

export default function handler(req, res) {
  res.status(200).json(news);
}