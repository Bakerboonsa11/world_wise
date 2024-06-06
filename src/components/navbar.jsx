import { Link } from "react-router-dom";
import style from "./navbar.module.css";

function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/home_page">Home</Link>
        </li>
        <li>
          <Link to="/pricing"> pricing</Link>
        </li>
        <li>
          <Link to="/product"> product</Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
