import Product from"../models/Product.js";

export const createProduct = async (req, res) => {
    try {
        const existingProductName = await Product.findOne({ProductName: req.body.ProductName});
        const existingEAN = await Product.findOne({EAN: req.body.EAN});
        if (existingProductName || existingEAN) {
            res.status(400).json({ error: 'ProductName or EAN already exists' });
        } else {
            const newProduct = new Product(req.body);
            await newProduct.save();
            res.status(201).json({ message: 'Product created successfully', Product: newProduct });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProducts = async (req, res) => {
    try {
        const Products = await Product.find();
        res.status(200).json({ Products });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product updated successfully', Product: updatedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) res.status(404).json({ message: 'Product not found' });
        res.status(200).json({ message: 'Product deleted successfully', Product: deletedProduct });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};