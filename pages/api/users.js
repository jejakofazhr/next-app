// pages/api/users.js
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { email } = req.query;
    const user = await prisma.user.findUnique({
        where: { email },
    });
    res.status(200).json(user);
}
