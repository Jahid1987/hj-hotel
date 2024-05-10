import { Map, Marker } from "pigeon-maps";
import SectionTitle from "../SectionTitle";
const Location = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row-reverse items-center my-5 md:my-20">
      <div data-aos="fade-up" className="flex-1 w-full">
        <Map
          height={300}
          defaultCenter={[21.425511, 91.97583]}
          defaultZoom={11}
        >
          <Marker width={30} anchor={[21.425511, 91.97583]} />
        </Map>
      </div>
      <div className="flex-1 w-full">
        <SectionTitle
          h3={"wide view of the sea"}
          h1={"Best Location"}
          text={`Laboni Point, Laboni Beach Rd, Cox's Bazar 4700`}
        />
      </div>
    </div>
  );
};

export default Location;
