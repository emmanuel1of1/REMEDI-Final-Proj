import express from 'express';
import { createMed, deleteMed, updateMed, viewMeds } from '../controller/meds.js';

const router= express.Router();
router.get('/', viewMeds);
router.post('/', createMed);
router.patch('/:id', updateMed);
router.delete('/:id', deleteMed);
export default router;