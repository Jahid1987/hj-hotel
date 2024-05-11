import { useLoaderData } from "react-router-dom";
import Banner from "../components/Room/Banner";

const Room = () => {
  const room = useLoaderData();
  const { category, description, image, price, reviews, size, _id } = room;
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Room;
