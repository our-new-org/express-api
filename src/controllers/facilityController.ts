import { Request, Response } from 'express';
import facilityService from '../services/facilityService';

export const getFacilityById = async (req: Request, res: Response) => {
  const { facilityId } = req.params;
  try {
    const facility = await facilityService.getFacilityById(Number(facilityId));
    if (facility) {
      res.json(facility);
    } else {
      res.status(404).send('Could not fetch facility');
    }
  } catch (error) {
    res.status(500).send('Error fetching facility');
  }
};

export const createFacility = async (req: Request, res: Response) => {
  const facilityData = req.body;
  try {
    const newFacility = await facilityService.createFacility(facilityData);
    res.json(newFacility);
  } catch (error) {
    res.status(500).send('Error creating facility');
  }
};
