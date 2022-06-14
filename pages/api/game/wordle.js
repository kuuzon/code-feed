import { LegibleWords } from '../../../database/wordle';

export default function handler(req, res) {
  res.status(200).json(LegibleWords);
}