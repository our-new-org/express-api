import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

function generateRandomApartmentNumber() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

router.get('/:email', async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      res.json(user);
    } else {
      const newUser = await prisma.user.create({
        data: {
          email,
          apartmentNumber: generateRandomApartmentNumber(),
        },
      });

      res.json(newUser);
    }
  } catch (error) {
    res.status(500).send('Error fetching user');
  }
});

router.post('/users', async (req: Request, res: Response) => {
  const { email, apartmentNumber } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        apartmentNumber,
      },
    });

    res.json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});

export default router;
