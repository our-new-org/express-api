import prisma from '../prisma';

type BookingData = {
  userId: number;
  facilityId: number;
  facilityName: string;
  date: string;
  startTime: string;
  endTime: string;
};

const createBooking = async (data: BookingData) => {
  try {
    const newBooking = await prisma.booking.create({ data });
    return newBooking;
  } catch (error) {
    throw new Error('Error creating booking is this the one?');
  }
};

const getBookingByUserId = async (userId: number) => {
  try {
    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: { facility: true },
    });
    return bookings;
  } catch (error) {
    throw new Error('Error fetching booking by userId');
  }
};

export const updateBooking = async (bookingId: number, data: BookingData) => {
  try {
    await prisma.booking.delete({ where: { id: Number(bookingId) } });
    const newBooking = await prisma.booking.create({ data });
    console.log(newBooking);
    return newBooking;
  } catch (error) {
    console.log('error');
    console.log('error');
    console.log('error');
    console.log(error);

    throw new Error('Error updating booking');
  }
};
export default { createBooking, getBookingByUserId, updateBooking };
