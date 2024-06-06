import { Link } from "react-router-dom";
import style from "./PageNav.module.css";
import Logo from "./Logo.jsx";

function NavBar() {
  return (
    <nav className={style.nav}>
      <Logo />
      <ul>
        <li>
          <Link to="/Pricinig"> pricing</Link>
        </li>
        <li>
          <Link to="/Product"> product</Link>
        </li>
        <li>
          <Link to="/Login" className={style.ctaLink}>
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default NavBar;
