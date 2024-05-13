import BannerContent from "../components/Rooms/BannerContent";
import Card from "../components/Rooms/Card";
import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { docs: featuredRooms } = useFetch("/featuredrooms");

  return (
    <div>
      <BannerContent headline={`Search From All Featured Rooms`} />
      <div className="my-5 md:my-20">
        <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {featuredRooms.map((room) => (
            <Card room={room} key={room._key}></Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
