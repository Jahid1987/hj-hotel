import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import "react-toastify/dist/ReactToastify.css";
import SpecilaOffer from "../components/SpecilaOffer";

const Main = () => {
  AOS.init();
  return (
    <div>
      {/* nav bar  */}
      <Nav />
      {/* Outlet  */}
      <div
        className="max-w-[1440px] mx-auto px-2
        min-h-[calc(100vh-293px)]
      "
      >
        <Outlet />
      </div>
      {/* Footer  */}
      <Footer />
      <ToastContainer />
      <SpecilaOffer />
    </div>
  );
};

export default Main;
