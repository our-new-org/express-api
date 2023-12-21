import { Request, Response } from 'express';
import userService from '../services/userService';

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  try {
    const user = await userService.getUserByEmail(email);
    if (user) {
      res.json(user);
    } else {
      const newUser = await userService.createUser(email);
      res.json(newUser);
    }
  } catch (error) {
    res.status(500).send('Error fetching or creating user');
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const newUser = await userService.createUser(email);
    res.json(newUser);
  } catch (error) {
    res.status(500).send('Error creating user');
  }
};
