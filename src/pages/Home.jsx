import Banner from "../components/Home/Banner";
import Featured from "../components/Home/Featured";
// import Gallery from "../components/Home/Gallery";
import Location from "../components/Home/Location";
import Newsletter from "../components/Home/Newsletter";
import Reviews from "../components/Home/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Featured />
      {/* <Gallery /> */}
      <Newsletter />
      <Reviews />
      <Location />
    </div>
  );
};

export default Home;
