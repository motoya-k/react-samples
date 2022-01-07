import React from "react";
import { MovieList, Banner, GlobalNav } from "src/components";
import { Props } from "src/components/MovieList";
import { MOVIEAPI } from "src/plugins/apiConsts";
import "./App.css";

const App: React.FC = () => {
  const movieList: Props["movies"] = [
    {
      title: "NETFLIX ORIGINALS",
      fetchUrl: MOVIEAPI.fetchNetflixOriginals,
      size: "large",
    },
    { title: "TOP RATED", fetchUrl: MOVIEAPI.fetchTopRated, size: "large" },
    {
      title: "TRENDING",
      fetchUrl: MOVIEAPI.fetchTrending,
      size: "large",
    },
    {
      title: "ACTION MOVIES",
      fetchUrl: MOVIEAPI.fetchActionMovies,
      size: "middle",
    },
    {
      title: "COMEDY MOVIES",
      fetchUrl: MOVIEAPI.fetchComedyMovies,
      size: "middle",
    },
    {
      title: "HORROR MOVIES",
      fetchUrl: MOVIEAPI.fetchHorrorMovies,
      size: "middle",
    },
    {
      title: "ROMANCE MOVIES",
      fetchUrl: MOVIEAPI.fetchRomanceMovies,
      size: "middle",
    },
    {
      title: "DOCUMENT MOVIES",
      fetchUrl: MOVIEAPI.fetchDocumentMovies,
      size: "middle",
    },
  ];

  return (
    <div className="App">
      <GlobalNav />
      <Banner fetchUrl={MOVIEAPI.fetchNetflixOriginals} />
      <MovieList movies={movieList} />
    </div>
  );
};

export default App;
