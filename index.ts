import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import facilitiesRouter from './routers/facilities';

// For env File
dotenv.config();

function generateRandomApartmentNumber() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const app: Application = express();
const port = process.env.PORT || 8000;
const prisma = new PrismaClient();
app.use(express.json());
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.post('/api/users', async (req: Request, res: Response) => {
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

app.get('/users/:email', async (req: Request, res: Response) => {
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

app.use('/api/facilities', facilitiesRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
