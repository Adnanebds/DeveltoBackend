import Leverancier from"../models/Leverancier.js";

export const createLeverancier = async (req, res) => {
    try {
        const newLeverancier = new Leverancier(req.body);
        await newLeverancier.save();
        res.status(201).json({ message: 'Leverancier created successfully', Leverancier: newLeverancier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLeveranciers = async (req, res) => {
    try {
        const Leveranciers = await Leverancier.find();
        res.status(200).json({ Leveranciers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getLeverancier = async (req, res) => {
    try {
        const leverancier = await Leverancier.findById(req.params.id);
        if (!leverancier) res.status(404).json({ message: 'Leverancier not found' });
        res.status(200).json({ leverancier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateLeverancier = async (req, res) => {
    try {
        const updatedLeverancier = await Leverancier.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedLeverancier) res.status(404).json({ message: 'Leverancier not found' });
        res.status(200).json({ message: 'Leverancier updated successfully', Leverancier: updatedLeverancier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteLeverancier = async (req, res) => {
    try {
        const deletedLeverancier = await Leverancier.findByIdAndDelete(req.params.id);
        if (!deletedLeverancier) res.status(404).json({ message: 'Leverancier not found' });
        res.status(200).json({ message: 'Leverancier deleted successfully', Leverancier: deletedLeverancier });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};