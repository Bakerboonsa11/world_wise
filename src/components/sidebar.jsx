import Logo from "./Logo.jsx";
import AppNav2 from "./AppNav2.jsx";
import style from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";

function SideBar() {
  return (
    <div className={style.sidebar}>
      <Logo />
      <AppNav2 />
      <Outlet />

      <footer className={style.footer}>
        &copy; copyright {new Date().getFullYear()}by world inc.
      </footer>
    </div>
  );
}
export default SideBar;
