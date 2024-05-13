import Button from "../Button";
// featured images
import featured8 from "../../assets/images/image18.jpg";
import useFetch from "../../hooks/useFetch";
import FeaturedCard from "./FeaturedCard";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
const Featured = () => {
  const { docs: featuredRooms } = useFetch("/featuredrooms");

  return (
    <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5 my-5 md:my-20">
      <div className="flex-1">
        <SectionTitle
          h3={"BEST FEATURED ROOMS"}
          h1={"Reserve a Suite"}
          text={`Welcome to a world where luxury knows no bounds – welcome to HJ Hotel's featured product selection.`}
        />
        <div className="pt-3 grid gap-3 md:gap-5 grid-cols-1 md:grid-cols-2">
          {featuredRooms.map((room) => (
            <FeaturedCard room={room} key={room._id} />
          ))}
        </div>
      </div>
      <div className="flex-1">
        <img src={featured8} alt="" />
        <div data-aos="fade-up" className="mt-3">
          <Link to="/featured">
            <Button name="Book Our Featured Room" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
