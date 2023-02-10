import mongoose from "mongoose";

const FamilySchema = new mongoose.Schema(
    {
        FamilyName: {
            type: String,
            required: true
        },
        Address: {
            type: String,
            required: true
        },
        HouseNumber: {
            type: String,
            required: true
        },
        ZipCode: {
            type: String,
            required: true
        },
        City: {
            type: String,
            required: true
        },
        PhoneNumber: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true
        },
        AmountAdult: {
            type: Number,
            required: true
        },
        AmountChildren: {
            type: Number,
            required: true
        },
        AmountBabies: {
            type: Number,
            required: true
        }
    });
    
export default mongoose.model("Family", FamilySchema);