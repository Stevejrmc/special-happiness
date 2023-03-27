import mongoose from "mongoose";

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  actors: { type: [String], required: true },
  title: { type: String, required: true },
  rating: { type: String, required: true },
  release: { type: String, required: true },
  genre: { type: String, required: true },
});

const Movies = mongoose.model("Movies", movieSchema);

export default Movies;
