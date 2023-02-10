import express from "express";
import { createLeverancier, updateLeverancier, deleteLeverancier, getLeverancier, getLeveranciers }from '../controllers/leverancier.js';
import { verifyAdmin, verifyDMM } from "../utils/verifytoken.js";

// Create a new router
const router = express.Router();

// Create
router.post('/', verifyAdmin, createLeverancier);
// Get all
router.get('/', verifyDMM, getLeveranciers);
// Get
router.get('/:id',verifyDMM, getLeverancier);
// Update
router.put('/:id', verifyDMM, updateLeverancier);
// Delete
router.delete('/:id',verifyAdmin, deleteLeverancier);

export default router;