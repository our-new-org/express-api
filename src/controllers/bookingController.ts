import { Request, Response } from 'express';
import bookingService from '../services/bookingService';

export const createBooking = async (req: Request, res: Response) => {
  const bookingData = req.body;
  try {
    const newBooking = await bookingService.createBooking(bookingData);
    res.json(newBooking);
  } catch (error) {
    res.status(500).send('Error creating booking');
  }
};

export const getBookingByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const bookings = await bookingService.getBookingByUserId(Number(userId));
    res.json(bookings);
  } catch (error) {
    res.status(500).send('Error in fetching booking by User Id');
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;
  const bookingData = req.body;

  try {
    const bookings = await bookingService.updateBooking(
      Number(bookingId),
      bookingData,
    );
    res.json(bookings);
  } catch (error) {
    console.log(error);

    res.status(500).send('Error in updaing booking whyy');
  }
};

export const cancelBooking = async (req: Request, res: Response) => {
  const { bookingId } = req.params;

  try {
    await bookingService.cancelBooking(Number(bookingId));
    res.json({ message: 'Booking canceled successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error canceling booking');
  }
};
