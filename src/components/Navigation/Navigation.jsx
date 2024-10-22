import { NavLink } from "react-router-dom";

import c from "./Navigation.module.css";
import clsx from "clsx";

const Navigation = () => {
  const buildCssClasses = ({ isActive }) => clsx(c.link, isActive && c.active);

  return (
    <div className={c.container}>
      <NavLink className={buildCssClasses} to="/">
        Home
      </NavLink>
      <NavLink className={buildCssClasses} to="/movies">
        Movies
      </NavLink>
    </div>
  );
};

export default Navigation;
