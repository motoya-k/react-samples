import React from "react";
import { Row } from "src/components";
import { Props as RowProps } from "src/components/Row";

export type Props = {
  movies: RowProps[];
};

export const MovieList: React.FC<Props> = (props: Props) => {
  const { movies } = props;
  return (
    <>
      {movies.map((movie) => (
        <Row {...movie} />
      ))}
    </>
  );
};
