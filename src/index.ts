import express, { Request, Response, Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import facilitiesRouter from './routers/facilities';
import usersRouter from './routers/users';
import bookingsRouter from './routers/bookings';

// For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.use('/api/facilities', facilitiesRouter);
app.use('/api/users', usersRouter);
app.use('/api/bookings', bookingsRouter);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
