import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {/*{code here}*/}
      {actors.map(actor => <div className="actor"><h3>{actor.name}</h3><p>{actor.movies.join(", ")}</p></div>)}
    </div>
  );
};

export default Actors;
