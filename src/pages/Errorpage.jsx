import { Link } from "react-router-dom";
import errorImg from "../assets/images/bubble-gum-error-404.gif";
import Button from "../components/Button";
const Errorpage = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-2">
      <div className="grid place-items-center gap-2">
        <div className="h-auto w-1/2">
          <img className="h-full w-full object-cover" src={errorImg} alt="" />
        </div>
        <p className="font-light text-3xl md:text-5xl">404</p>
        <p className="font-thin text-3xl md:text-5xl">Page Not Found</p>
        <Link to="/">
          <Button name={`go to home`} />
        </Link>
      </div>
    </div>
  );
};

export default Errorpage;
