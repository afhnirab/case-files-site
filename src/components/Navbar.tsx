import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <span className="navbar-brand">Case Files</span>
        <NavLink
          to="/"
          end
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/tin-goyenda"
          className={({ isActive }) => "navbar-link" + (isActive ? " active" : "")}
        >
          Book list
        </NavLink>
      </div>
    </header>
  );
}
