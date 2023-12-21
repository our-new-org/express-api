import express from 'express';
import * as userController from '../controllers/userController';

const router = express.Router();

router.get('/:email', userController.getUserByEmail);
router.post('/', userController.createUser);

export default router;
