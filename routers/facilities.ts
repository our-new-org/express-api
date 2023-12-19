import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

router.get('/:roomId', async (req: Request, res: Response) => {
  const { roomId } = req.params;
  try {
    const user = await prisma.room.findUnique({
      where: { roomId: Number(roomId) },
    });
    if (user) {
      res.json(user);
    } else {
      res.status(404).send('Could not fetch facility');
    }
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

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
