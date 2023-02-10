import Voedselpakket from "../models/Voedselpakket.js";

export const createVoedselpakket = async (req, res) => {
    try {
        const { Family, Products, DeliveryDate } = req.body;
        const voedselpakket = new Voedselpakket({ Family, Products, DeliveryDate });
        await voedselpakket.save();
        res.status(201).json({ voedselpakket });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all Voedselpakketen
export const getVoedselpakketen = async (req, res) => {
    try {
    const voedselpakketen = await Voedselpakket.find().populate("Family").populate("Products");
    res.status(200).json({ voedselpakketen });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
    };
    
    // Get a specific Voedselpakket
    export const getVoedselpakket = async (req, res) => {
    try {
    const voedselpakket = await Voedselpakket.findById(req.params.id).populate("Family").populate("Products");
    if (!voedselpakket) {
    return res.status(404).json({ message: "Voedselpakket not found" });
    }
    res.status(200).json({ voedselpakket });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
    };
    
    // Update a Voedselpakket
    export const updateVoedselpakket = async (req, res) => {
    try {
    const updatedVoedselpakket = await Voedselpakket.findByIdAndUpdate(req.params.id, req.body, {new: true}).populate("Family").populate("Products");
    if (!updatedVoedselpakket) {
    return res.status(404).json({ message: "Voedselpakket not found" });
    }
    res.status(200).json({ updatedVoedselpakket });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
    };
    
    // Delete a Voedselpakket
    export const deleteVoedselpakket = async (req, res) => {
    try {
    const deletedVoedselpakket = await Voedselpakket.findByIdAndDelete(req.params.id);
    if (!deletedVoedselpakket) {
    return res.status(404).json({ message: "Voedselpakket not found" });
    }
    res.status(200).json({ deletedVoedselpakket });
    } catch (error) {
    res.status(500).json({ message: error.message });
    }
    };