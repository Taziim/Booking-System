import { Outlet } from "react-router-dom";
import MenuBar from "../components/menubar/MenuBar.jsx";
import NavBar from "../components/navbar/NavBar.jsx";

const MenuLayout = () => {
  return (
    <div className="bg-blue-950 ">
      <NavBar />
      {/* This component will always appear at the top */}
      <MenuBar />
      {/* Registration page will appear below MenuBar */}
      <Outlet />
    </div>
  );
};

export default MenuLayout;
