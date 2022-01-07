const API_KEY = process.env.REACT_APP_THEMOVIEAPI_KEY;
export const MOVIEAPI = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-us`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/discover/movie?api_key=${API_KEY}&languager=ja-jp`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchTraier: (movieId: string) =>
    `/movie/${movieId}/videos?api_key=${API_KEY}`,
};
