import express from 'express';
import {
  createFacilityController,
  getFacilityByIdController,
} from '../controllers/facilityController';

const router = express.Router();

router.get('/:facilityId', getFacilityByIdController);
router.post('/', createFacilityController);

export default router;
