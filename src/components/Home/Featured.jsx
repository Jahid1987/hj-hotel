import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Button from "../Button";
// featured images
import featured8 from "../../assets/images/image18.jpg";
import useFetch from "../../hooks/useFetch";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
const Featured = () => {
  AOS.init();
  const { docs } = useFetch("featuredrooms");
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 my-5 md:my-20">
      <div className="flex-1">
        <SectionTitle
          h3={"BEST FEATURED ROOMS"}
          h1={"Reserve a Suite"}
          text={`Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
        Proin tempor nunc vel nisl condimentum, nec tempor risus.`}
        />
        <div className="pt-3 grid gap-2 grid-cols-1 md:grid-cols-2">
          {docs.map((room) => (
            <FeaturedCard room={room} key={room._id} />
          ))}
        </div>
      </div>
      <div className="flex-1" data-aos="fade-up">
        <img src={featured8} alt="" />
        <div className="mt-3">
          <Link to="/featured">
            <Button name="Book Our Featured Room" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
