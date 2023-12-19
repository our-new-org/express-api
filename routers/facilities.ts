import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const { roomName, description, capacity, image, bookings } = req.body;

  try {
    const newUser = await prisma.room.create({
      data: {
        roomName,
        description,
        capacity,
        image,
        bookings,
      },
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

export default router;
