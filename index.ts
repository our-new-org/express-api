import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

// For env File
dotenv.config();

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

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
