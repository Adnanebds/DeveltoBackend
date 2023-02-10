import mongoose from "mongoose";

const VoedselpakketSchema = new mongoose.Schema({
  Family: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Family",
      required: true
  },
  Products: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true
  }],
  DeliveryDate: {
      type: Date,
      required: false
  }
});

export default mongoose.model("Voedselpakket", VoedselpakketSchema);
