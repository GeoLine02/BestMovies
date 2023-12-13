import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <nav className="text-xl ">
      <div className="flex justify-around items-center fixed bottom-0 w-full backdrop-filter backdrop-blur-md bg-opacity-25 py-4">
        <ul>
          <li>
            <NavLink>Films</NavLink>
          </li>
          <li>
            <NavLink>TV Series</NavLink>
          </li>
          <li>
            <NavLink>News</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink>About</NavLink>
          </li>
          <li>
            <NavLink>Terms & Polices</NavLink>
          </li>
          <li>
            <NavLink>Cookies</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
