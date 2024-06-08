import AppNav from "../components/AppNav.jsx";
import SideBar from "../components/sidebar.jsx";
import style from "./AppLayout.module.css";
import Map from "../components/map.jsx";

function AppLayout() {
  return (
    <div className={style.app}>
      <SideBar />
      <Map />
    </div>
  );
}
export default AppLayout;
