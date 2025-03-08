import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const Layout = () => {
  return (
    <>
      <NavBar />
      {/* <div className="container mx-auto p-4"> */}
      <Outlet />
      {/* </div> */}
    </>
  );
};

export default Layout;
