import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      {/* topnav  */}
      <TopNav />
      {/* nav bar  */}
      <Nav />
      {/* Outlet  */}
      <div className="max-w-[1440px] mx-auto">
        <Outlet />
      </div>
      {/* Footer  */}
      <Footer />
    </div>
  );
};

export default Main;
