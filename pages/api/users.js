import { PrismaClient } from '@prisma/client';
import { sanitize } from '@/utils/sanitize';
const prisma = new PrismaClient();

export default function Comment({ html }) {
    return <div dangerouslySetInnerHTML={{ __html: sanitize(html) }} />;
}

export default async function handler(req, res) {
    const { email } = req.query;
    const user = await prisma.user.findUnique({
        where: { email },
    });
    res.status(200).json(user);
}