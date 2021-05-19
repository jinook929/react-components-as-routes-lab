import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink exact to="/" activeClassName="selected">Home</NavLink>
      <NavLink exact to="/movies" activeClassName="selected">Movies</NavLink>
      <NavLink exact to="/directors" activeClassName="selected">Directors</NavLink>
      <NavLink exact to="/actors" activeClassName="selected">Actors</NavLink>
    </div>
  );
};

export default NavBar;
