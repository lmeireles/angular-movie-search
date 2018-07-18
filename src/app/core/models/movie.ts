import {Genre} from './genre';

export class Movie {
  id: Number;
  poster_path: String;
  adult: Boolean;
  release_date: String;
  genre_ids: Number[];
  original_title: String;
  original_language: String;
  title: String;
  backdrop_path: String;
  popularity: Number;
  vote_count: Number;
  video: Boolean;
  vote_average: Number;
  overview: String;

  // Extra fields
  budget: Number;
  revenue: Number;
  runtime: Number;
  genres: Genre[];
  homepage: String;
  tagline: String;
}
