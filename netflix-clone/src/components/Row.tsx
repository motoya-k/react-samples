import React, { useState, useEffect } from "react";
import { $axios } from "src/plugins/axios";
import { Movie } from "src/types";
import { MOVIEAPI } from "src/plugins/apiConsts";
import YouTube from "react-youtube";
import "./Row.scss";

const baseURL = "https://image.tmdb.org/t/p/original";

type Size = "large" | "middle";

export type Props = {
  title: string;
  fetchUrl: string;
  size?: Size;
};

type Options = {
  height: string;
  width: string;
  playerVars: {
    autoplay: 0 | 1 | undefined;
  };
};

const options: Options = {
  height: "390",
  width: "640",
  playerVars: {
    autoplay: 1,
  },
};

export const Row: React.FC<Props> = ({ title, fetchUrl, size }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const request = await $axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  const clickHandler = async (movie: Movie) => {
    if (trailerUrl) {
      setTrailerUrl(null);
    } else {
      let res = await $axios.get(MOVIEAPI.fetchTraier(movie.id));
      setTrailerUrl(res.data.results[0]?.key);
    }
  };

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie) => (
          <img
            className={
              size === "large" ? "Row-poster-large Row-poster" : "Row-poster"
            }
            src={`${baseURL}${
              size === "large" ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
            onClick={() => clickHandler(movie)}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
    </div>
  );
};
