import { Link, NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <Link to="/">Home Page</Link>
      <NavLink to="/languages">Linguaggi</NavLink>
    </nav>
  );
}
export default MainNav;
