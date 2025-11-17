import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    shapes: { type: Array, default: [] },
    zoom: { type: Number, default: 1 },
    pan: {
      x: Number,
      y: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Project", projectSchema);
