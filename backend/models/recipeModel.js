import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const recipeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  ingredients: [
    {
        type: String,
        required: true,
    },
  ],
  video: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  comments: [commentSchema],
  numComments: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
    timestamps: true,
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
