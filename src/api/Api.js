import axios from "axios";

const API_KEY = "26a7d8afe9f82facc441f01c4235b0a5";
const API_MOVIE = "https://api.themoviedb.org/3/movie/";
const API_TIVI = "https://api.themoviedb.org/3/tv/";
export const API_TRENDING =
  "https://api.themoviedb.org/3/trending/all/day?api_key=26a7d8afe9f82facc441f01c4235b0a5";
export const movieApi = {
  async getMovie(type, page = 1) {
    return await (
      await axios.get(
        `${API_MOVIE}${type}?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
  async getMovieDetails(movieID) {
    return await (
      await axios.get(`${API_MOVIE}${movieID}?api_key=${API_KEY}&language=vi`)
    ).data;
  },
  async getMovieCredits(movieID) {
    return await (
      await axios.get(
        `${API_MOVIE}${movieID}/credits?api_key=${API_KEY}&language=vi`
      )
    ).data;
  },
  async getMovieReviews(movieID, page = 1) {
    return await (
      await axios.get(
        `${API_MOVIE}${movieID}/reviews?api_key=${API_KEY}&page=${page}`
      )
    ).data;
  },
  async getMovieSimilar(movieID, page = 1) {
    return await (
      await axios.get(
        `${API_MOVIE}${movieID}/similar?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
  async getMovieRecomments(movieID, page = 1) {
    return await (
      await axios.get(
        `${API_MOVIE}${movieID}/recommendations?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
};

export const tiviSeriesApi = {
  async getTiviSeries(type, page = 1) {
    return await (
      await axios.get(
        `${API_TIVI}${type}?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
  async getTiviSeriesDetails(tiviID) {
    return await (
      await axios.get(`${API_TIVI}${tiviID}?api_key=${API_KEY}&language=vi`)
    ).data;
  },
  async getTiviSeriesCredits(tiviID) {
    return await (
      await axios.get(
        `${API_TIVI}${tiviID}/credits?api_key=${API_KEY}&language=vi`
      )
    ).data;
  },
  async getTiviSeriesReviews(tiviID, page = 1) {
    return await (
      await axios.get(
        `${API_TIVI}${tiviID}/reviews?api_key=${API_KEY}&page=${page}`
      )
    ).data;
  },
  async getTiviSeriesSimilar(tiviID, page = 1) {
    return await (
      await axios.get(
        `${API_TIVI}${tiviID}/similar?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
  async getTiviSeriesRecomments(movieID, page = 1) {
    return await (
      await axios.get(
        `${API_TIVI}${movieID}/recommendations?api_key=${API_KEY}&language=vi&page=${page}`
      )
    ).data;
  },
  async getTiviSeriesSeason(movieID, season = 1) {
    return await (
      await axios.get(
        `https://api.themoviedb.org/3/tv/${movieID}/season/${season}?api_key=${API_KEY}&language=en-US`
      )
    ).data;
  },
};

export const IMAGE_PATH = "https://image.tmdb.org/t/p/original/";
export const IMAGE_PATH_500 = "https://image.tmdb.org/t/p/w500/";
