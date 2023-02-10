import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
            role: {
            type: String,
            default: "vrijwilliger",
            enum: ["directie", "magazijnmedewerker", "vrijwilliger"],
        },
        tokens: [
            {
                token: {
                    type: String,
                    required: true
                }
            }
        ]
    });

export default mongoose.model("User", UserSchema);