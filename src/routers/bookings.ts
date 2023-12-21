import express from 'express';
import * as bookingController from '../controllers/bookingController';

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/:userId', bookingController.getBookingByUserId);

export default router;
