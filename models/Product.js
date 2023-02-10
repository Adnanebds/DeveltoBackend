import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
    {
        ProductName: {
            type: String,
            required: true,
            unique: true
        },
        Description: {
            type: String,
            required: true
        },
        Category: {
            type: String,
            required: true
        },
        EAN: {
            type: String,
            required: true,
            maxlength: 13,
            unique: true
        },
        Stock: {
            type: Number,
            required: true
        }
    });

export default mongoose.model("Product", ProductSchema);