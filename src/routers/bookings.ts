import express from 'express';
import * as bookingController from '../controllers/bookingController';

const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/:userId', bookingController.getBookingByUserId);
router.put('/:bookingId', bookingController.updateBooking);
router.delete('/:bookingId', bookingController.cancelBooking);

export default router;
