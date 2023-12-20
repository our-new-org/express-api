import prisma from '../prisma';

type Facility = {
  name: string;
  description: string;
  capacity: number;
  image: string;
  slotDuration: number;
  openingTime: string;
  closingTime: string;
};

const getFacilityById = async (facilityId: number) => {
  try {
    const facility = await prisma.facility.findUnique({
      where: { id: facilityId },
    });
    return facility;
  } catch (error) {
    throw new Error('Error fetching facility');
  }
};

const createFacility = async (data: Facility) => {
  try {
    const newFacility = await prisma.facility.create({ data });
    return newFacility;
  } catch (error) {
    throw new Error('Error creating facility');
  }
};

export default { createFacility, getFacilityById };
