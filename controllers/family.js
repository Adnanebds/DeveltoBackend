import Family from"../models/Family.js";

export const createFamily = async (req, res) => {
    try {
        const newFamily = new Family(req.body);
        await newFamily.save();
        res.status(201).json({ message: 'Family created successfully', family: newFamily });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFamilies = async (req, res) => {
    try {
        const families = await Family.find();
        res.status(200).json({ families });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getFamily = async (req, res) => {
    try {
        const family = await Family.findById(req.params.id);
        if (!family) res.status(404).json({ message: 'Family not found' });
        res.status(200).json({ family });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateFamily = async (req, res) => {
    try {
        const updatedFamily = await Family.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedFamily) res.status(404).json({ message: 'Family not found' });
        res.status(200).json({ message: 'Family updated successfully', family: updatedFamily });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteFamily = async (req, res) => {
    try {
        const deletedFamily = await Family.findByIdAndDelete(req.params.id);
        if (!deletedFamily) res.status(404).json({ message: 'Family not found' });
        res.status(200).json({ message: 'Family deleted successfully', family: deletedFamily });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};