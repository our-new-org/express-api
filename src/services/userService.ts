import prisma from '../prisma';
import generateRandomApartmentNumber from '../utils';

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    return user;
  } catch (error) {
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
    });
    return newUser;
  } catch (error) {
    throw new Error('Error creating user');
  }
};

export default { createUser, getUserByEmail };
