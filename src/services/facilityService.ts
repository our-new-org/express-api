import prisma from '../prisma';

type PostFacility = {
  name: string;
  description: string;
  capacity: number;
  image: string;
  slotDuration: number;
  openingHour: number;
  closingHour: number;
};

const getFacilities = async () => {
  try {
    const facilities = await prisma.facility.findMany();
    return facilities;
  } catch (error) {
    throw new Error('Error fetching facilities');
  }
};

const getFacilityById = async (facilityId: number) => {
  try {
    const facility = await prisma.facility.findUnique({
      where: { id: facilityId },
      include: { bookings: true },
    });
    return facility;
  } catch (error) {
    throw new Error('Error fetching facility');
  }
};

const createFacility = async (data: PostFacility) => {
  try {
    const newFacility = await prisma.facility.create({ data });
    return newFacility;
  } catch (error) {
    throw new Error('Error creating facility');
  }
};

export default { createFacility, getFacilityById, getFacilities };
