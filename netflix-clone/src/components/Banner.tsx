import React, { useState, useEffect } from "react";
import { Movie } from "src/types";
import { $axios } from "src/plugins/axios";
import "src/components/Banner.scss"



const baseURL = "https://image.tmdb.org/t/p/original";

type Props = {
  fetchUrl: string;
};

export const Banner: React.FC<Props> = (props: Props) => {
  const { fetchUrl } = props;
  const [movie, setMovie] = useState<Partial<Movie>>({});
  useEffect(() => {
    async function fetchData() {
      const res = await $axios.get(fetchUrl);
      const movies = res.data.results;
      setMovie(movies[Math.floor(Math.random() * movies.length)]);
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <header
      className="Banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${baseURL}${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="Banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="Banner-buttons">
          <button className="Banner-button">Play</button>
          <button className="Banner-button">My List</button>
        </div>

        <h1 className="Banner-description">{movie?.overview}</h1>
      </div>

      <div className="Banner-fadeBottom" />
    </header>
  );
};
