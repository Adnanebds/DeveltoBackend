import express from "express";
import { createVoedselpakket, getVoedselpakket,getVoedselpakketen,deleteVoedselpakket } from "../controllers/voedselpakket.js";
import { verifyAdmin, verifyDMM,verifyDVW, verifyUser } from "../utils/verifytoken.js";

// Create a new router
const router = express.Router();

// Create
router.post("/",verifyDVW, createVoedselpakket);
// Get all
router.get("/",verifyDVW, getVoedselpakketen);
// Get by id
router.get("/:id",verifyDVW, getVoedselpakket);
// Delete
router.delete("/:id",verifyAdmin, deleteVoedselpakket);

export default router;