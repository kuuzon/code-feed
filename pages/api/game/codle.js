import { codle } from '../../../database/codle';

export default function handler(req, res) {
  res.status(200).json(codle);
}