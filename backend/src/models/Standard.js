import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { _id: false }
);

const standardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    shortDescription: {
      type: String,
      required: true,
      trim: true,
    },
    version: {
      type: String,
      default: "v1.0",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    sections: [sectionSchema],
  },
  {
    timestamps: true,
  }
);

const Standard = mongoose.model("Standard", standardSchema);

export default Standard;