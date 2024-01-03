import prisma from '../prisma';
import generateRandomApartmentNumber from '../utils';

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      include: { bookings: true },
    });
    if (user) return user;
    const newUser = await prisma.user.create({
      data: {
        email,
        apartmentNumber: generateRandomApartmentNumber(),
      },
      include: { bookings: true },
    });
    return newUser;
  } catch (error) {
    console.log('did not work');
    throw new Error('Error fetching user');
  }
};

const createUser = async (email: string) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        apartmentNumber: generateRandomApartmentNumber(),
      },
      include: { bookings: true },
    });
    return newUser;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export default { createUser, getUserByEmail };
