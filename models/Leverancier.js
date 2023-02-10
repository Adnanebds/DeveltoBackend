import mongoose from "mongoose";

const LeverancierSchema = new mongoose.Schema(
    {
        CompanyName: {
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
        ContactPersonName: {
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
        DeliveryDate: {
            type: Date,
            required: true
        },

    });

export default mongoose.model("Leverancier", LeverancierSchema);