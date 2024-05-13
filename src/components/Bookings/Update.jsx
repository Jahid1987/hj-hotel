import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const Update = ({ room, refetchData }) => {
  const [checkIn, setCheckIn] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const { image } = room;

  async function handleUpdate() {
    await axiosSecure.patch(`/bookings/${room._id}`, {
      checkIn: checkIn.toLocaleDateString(),
    });
    await refetchData();
    toast.success("Room is updated!");
  }
  return (
    <div className="w-full h-full flex flex-col justify-between space-y-3 md:space-y-5">
      <h3 className="font-bold text-2xl text-center">
        You Can Change Check In Date
      </h3>
      <div className="h-52 w-52 self-center">
        <img src={image} alt="" />
      </div>
      <div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold">Booking Date</p>
          <DatePicker
            className=" p-2 border"
            selected={checkIn}
            onChange={(date) => setCheckIn(date)}
          />
        </div>
        <div className="modal-action">
          <form method="dialog" className="flex w-full justify-between">
            <button className="btn btn-error btn-sm md:btn-md rounded-none border-none uppercase uppercas font-light">
              Cancel
            </button>
            <button
              onClick={handleUpdate}
              className=" btn btn-sm btn-success md:btn-md rounded-none border-none uppercase uppercas font-medium"
            >
              Update Booking Date
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
