import { useState } from "react";
import ReactSlider from "react-slider";
import BannerContent from "../components/Rooms/BannerContent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useFetch from "../hooks/useFetch";
import Card from "../components/Rooms/Card";
const Rooms = () => {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [rooms, isLoading, err] = useFetch("/rooms");
  console.log(checkIn, checkOut, isLoading, err);
  return (
    <div>
      <BannerContent />
      {/* banner Funtionality content  */}
      <div className=" w-full bg-neutral text-center py-6">
        <select className="select rounded-none">
          <option disabled defaultValue={"Sort"}>
            Sort By
          </option>
          <option>Price (High to Low)</option>
          <option>Ratings</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
      </div>

      <div className="grid place-items-start gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 my-5 md:my-20">
        {/* left section */}
        <div className="md:col-span-1 space-y-3 border w-full p-4">
          <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Check In</span>
            <DatePicker
              className=" p-2 border"
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Check Out</span>
            <DatePicker
              className=" p-2 border"
              selected={checkIn}
              onChange={(date) => setCheckOut(date)}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Price</span>
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
            />
          </div>
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
          {rooms.map((room) => (
            <Card room={room} key={room._id} />
          ))}
        </div>
      </div>
      {}
    </div>
  );
};

export default Rooms;
