import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Songs from "../Song/Songs";
import Artist from "../Artists/Artist";
import Bot from "./botface.svg";
import Home from "../Home";

function Navbar(props) {
  return (
    <div className="Nav">
      <div className="Nav-text">
        <Link to="/" component={Home} className="Nav-heading">Home</Link>
        <Link to="/song" component={Songs} className="Nav-heading">
          Songs
        </Link>
        <Link to="/artists" component={Artist} className="Nav-heading">
          Artists
        </Link>
      </div>
      <div className="Nav-Details">
        <div className="Navbar-userbot">
          <img src={Bot} alt="botface" />
        </div>
        <div className="Navbar-Logindetails">
          <p className="Navbar-username">{props.name}</p>
          <p className="Navbar-useremail">{props.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
