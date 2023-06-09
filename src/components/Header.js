import React from "react";
import LikePage from "../pages/LikePage";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">REACT MOVIES</h1>
      <div className="button">
        <NavLink to="/">
          <input type="button" value=" Accueil " />
        </NavLink>
        <NavLink to="/favoris">
          <input type="button" value=" Favoris " />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
