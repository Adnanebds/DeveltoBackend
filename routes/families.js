import express from "express";
import { createFamily, updateFamily, deleteFamily, getFamily, getFamilies} from '../controllers/family.js';
import { verifyAdmin, verifyDVW } from "../utils/verifytoken.js";

// Create a new router
const router = express.Router();

// Create
router.post('/',verifyAdmin, createFamily);
// Get all
router.get('/',verifyDVW, getFamilies);
// Get
router.get('/:id',verifyDVW, getFamily);
// Update
router.put('/:id',verifyAdmin, updateFamily);
// Delete
router.delete('/:id',verifyAdmin, deleteFamily);

export default router;