import express from 'express';
import * as facilityController from '../controllers/facilityController';

const router = express.Router();

router.get('/', facilityController.getFacilities);
router.get('/:facilityId', facilityController.getFacilityById);
router.post('/', facilityController.createFacility);

export default router;
