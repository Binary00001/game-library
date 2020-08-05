import mongoose from "mongoose";

const Schema = mongoose.Schema;

//create the model for Game data
export const GameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number
  },
  description: {
    type: String
  },
  developer: {
    type: String
  },
  publisher: {
    type: String
  },
  coverArt: {
    type: String
  }
});
