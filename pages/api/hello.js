import Cors from 'cors';
import initMiddleware from '@/lib/init-middleware';
const cors = initMiddleware(
  Cors({
    origin: ['https://your-domain.com'],
    methods: ['GET', 'POST'],
  })
);

export default async function handler(req, res) {
  await cors(req, res);
  res.json({ message: 'CORS secure' });
}