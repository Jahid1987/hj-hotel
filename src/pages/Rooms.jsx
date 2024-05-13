import { useEffect, useState } from "react";
import BannerContent from "../components/Rooms/BannerContent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Card from "../components/Rooms/Card";
import { TbCurrencyTaka } from "react-icons/tb";
import useAxiosSecure from "../hooks/useAxiosSecure";
const Rooms = () => {
  const axiosSecure = useAxiosSecure();
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(new Date());
  const [price, setPrice] = useState(5000);
  const [rooms, setRooms] = useState([]);
  // fetching data using cutom hook which is secured by jwt
  useEffect(() => {
    axiosSecure.get(`/rooms?status=available&price=${price}`).then((res) => {
      setRooms(res.data);
    });
  }, [price]);
  // handle sorting
  function handleSort(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <BannerContent headline={`Search From All Available Rooms`} />
      {/* banner Funtionality content  */}
      <div className=" w-full bg-neutral text-center py-6">
        <select
          className="select rounded-none"
          defaultValue={"Sort By"}
          onChange={handleSort}
        >
          <option disabled>Sort By</option>
          <option value="rating">Ratings</option>
          <option>Offers</option>
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
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
            />
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Price</span>
            <span className="font-medium text-lg flex items-center">
              <TbCurrencyTaka />
              {price}
            </span>
          </div>
          <div>
            <input
              type="range"
              name="price"
              max="10000"
              value={price}
              step="10"
              onChange={(e) => setPrice(e.target.value)}
              className="w-full"
            />
          </div>
        </div>
        {/* right section all rooms are being shown here */}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-5">
          {!rooms?.length > 0 ? (
            <p>Loading data...</p>
          ) : (
            rooms.map((room) => <Card room={room} key={room._id} />)
          )}
        </div>
      </div>
      {}
    </div>
  );
};

export default Rooms;
