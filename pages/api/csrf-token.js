// pages/api/csrf-token.js
import { generateCsrfToken } from '@/lib/csrf';

export default function handler(req, res) {
  const secret = process.env.SECRET_KEY;
  const token = generateCsrfToken(secret);
  res.status(200).json({ csrfToken: token });
}
