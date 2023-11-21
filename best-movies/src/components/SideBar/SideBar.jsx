import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../constants/routes";

const SideBar = () => {
  return (
    <aside>
      <ul>
        <li>
          <NavLink to={routes.movies}>All Films</NavLink>
        </li>
        <li>
          <NavLink>TV Series</NavLink>
        </li>
        <li>
          <NavLink>Features</NavLink>
        </li>
        <li>
          <NavLink>Shorts</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
