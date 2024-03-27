import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default FrontLayout;
