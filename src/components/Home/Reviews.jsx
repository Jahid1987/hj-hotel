import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SectionTitle from "../SectionTitle";
import Review from "./Review";
import useFetch from "../../hooks/useFetch";
const Reviews = () => {
  const { docs: reviews } = useFetch("/reviews");
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="my-5 md:my-20">
      <div className="text-center md:w-2/3 mx-auto mb-5 md:mb-10">
        <SectionTitle
          h3={"WHAT OUR GUESTS SAY"}
          h1={"Hear from Our Guests"}
          text={`Explore the stories, experiences, and insights shared by our valued guests. From glowing testimonials to cherished memories, our footer section is a treasure trove of firsthand accounts. Dive into the world of our accommodations through the eyes of those who have walked our halls, savored our amenities, and felt the warmth of our hospitality. Join the conversation and discover what makes us truly special.`}
        />
      </div>
      <div className="w-[95%] m-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
