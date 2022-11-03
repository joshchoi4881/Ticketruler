import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-container">
      <Link to="/">
        <h1>Ticketruler</h1>
      </Link>
    </div>
  );
};

export default Header;
