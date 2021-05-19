import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {/*{code here}*/}
      {movies.map(movie => <div className="movie"><h3>{movie.title}</h3><p>[ {movie.genres.join(", ")} ({movie.time} minutes) ]</p></div>)}
    </div>
  );
};

export default Movies;
