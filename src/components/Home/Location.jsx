import { Map, Marker } from "pigeon-maps";
import SectionTitle from "../SectionTitle";
const Location = () => {
  return (
    <div className="flex gap-3 flex-col md:flex-row-reverse items-center my-5 md:my-20">
      <div className="flex-1 w-full">
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
          h1={"Have benefite of the locatoin"}
          text={` Welcome to Laboni Point, nestled along Laboni Beach Rd in Cox's Bazar 4700. Here, where the azure waters of the Bay of Bengal meet golden sands, discover our coastal haven. Immerse yourself in the natural beauty of Bangladesh's longest sandy beach, just steps away from our doorstep. Whether you seek seaside serenity, thrilling water sports, or vibrant local culture, Laboni Point is your gateway to an unforgettable coastal escape. Indulge in breathtaking sunsets, savor local delicacies, and create cherished memories in this idyllic seaside paradise. Experience the essence of Cox's Bazar at Laboni Point – your oasis by the sea. `}
        />
      </div>
    </div>
  );
};

export default Location;
