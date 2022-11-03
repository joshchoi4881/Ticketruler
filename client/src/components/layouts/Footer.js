import React from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

const Footer = () => {
  const FooterLink = ({ to, children }) => {
    let path = useResolvedPath(to);
    let match = useMatch({ path: path.pathname, end: true });
    return (
      <Link className={match ? "link link-active" : "link"} to={to}>
        {children}
      </Link>
    );
  };

  return (
    <div id="footer-container">
      <div id="footer-links">
        <Link to="/">
          <h1>Ticketruler</h1>
        </Link>
        <FooterLink className="link" to="/contact">
          Contact
        </FooterLink>
      </div>
      <p className="text-white">
        Copyright © 2022 Ticketruler, Inc. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
