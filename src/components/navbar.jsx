import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/home_page">Home</Link>
      <Link to="/pricing"> pricing</Link>
      <Link to="/product"> product</Link>
    </nav>
  );
}
export default NavBar;
