import express from 'express';
import {
  createUserController,
  getUserByEmailController,
} from '../controllers/userController';

const router = express.Router();

router.get('/:email', getUserByEmailController);
router.post('/', createUserController);

export default router;
