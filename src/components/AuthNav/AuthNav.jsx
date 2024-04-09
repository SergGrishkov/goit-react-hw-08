import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div className={css.listLink}>
      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
        to="/register"
      >
        Register
      </NavLink>

      <NavLink
        className={({ isActive }) => {
          return clsx(css.link, isActive && css.active);
        }}
        to="/login"
      >
        LogIn
      </NavLink>
    </div>
  );
};

export default AuthNav;
