import React, { useState, useEffect } from "react";
import { $axios } from "src/plugins/axios";
import { Movie } from "src/types";
import "src/components/Row.scss";

const baseURL = "https://image.tmdb.org/t/p/original";

type Size = "large" | "middle";

type Props = {
  title: string;
  fetchUrl: string;
  size?: Size;
};

export const Row: React.FC<Props> = ({ title, fetchUrl, size }: Props) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    async function fetchData() {
      const request = await $axios.get(fetchUrl);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);

  console.debug(movies);

  return (
    <div className="Row">
      <h2>{title}</h2>
      <div className="Row-posters">
        {movies.map((movie, i) => (
          <img
            className={
              size === "large" ? "Row-poster-large Row-poster" : "Row-poster"
            }
            src={`${baseURL}${
              size === "large" ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
};
