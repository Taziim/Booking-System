import NavBar from "../components/navbar/NavBar.jsx";
import { Outlet } from "react-router-dom";

import MenuBar from "../components/menubar/MenuBar.jsx";
const Layout = () => {
  return (
    <div className="bg-amber-500">
      <div className="bg-blue-950 h-100">
        {/* navbar */}
        <div className="">
          <NavBar />
        </div>
        {/* menubar */}
        <div className="">
          <MenuBar />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
