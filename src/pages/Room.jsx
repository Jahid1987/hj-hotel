import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLoaderData, useNavigate } from "react-router-dom";
import Banner from "../components/Room/Banner";
import { useState } from "react";
import RoomDetails from "../components/Room/RoomDetails";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import useAxiosSecure from "../hooks/useAxiosSecure";

const Room = () => {
  const axiosSecure = useAxiosSecure();
  const room = useLoaderData();
  const [checkIn, setCheckIn] = useState(new Date());
  // const [checkOut, setCheckOut] = useState(new Date());
  const navigate = useNavigate();
  const { user } = useAuth();
  const { category, image, price, _id } = room;
  // handle modal pop up
  function handleBooking() {
    if (user) {
      document.getElementById("booking-modal").showModal();
    } else {
      toast.warning("You must login first before booking any room");
      navigate("/login");
    }
  }
  // handling confirm booking
  async function handleConfirmBooking() {
    const booking = {
      checkIn: checkIn.toLocaleDateString(),
      user_email: user.email,
      room_id: _id,
      category,
      image,
    };
    try {
      await axiosSecure.post(`/bookings`, booking);
      await axiosSecure.patch(`/rooms/${_id}`, {
        status: "unavailable",
      });
      toast.success("Room is added!");
      navigate("/bookings");
    } catch (err) {
      console.log(err);
      toast.warning("OOps! Something Wrong!");
    }
  }
  return (
    <div>
      <Banner room={room} />
      <div className="grid place-items-start gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 my-5 md:my-20">
        {/* left content  */}
        <RoomDetails room={room} />
        {/* right content  */}
        <div className="md:col-span-1 space-y-3 border w-full p-4">
          <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Booking Date</span>
            <DatePicker
              className=" p-2 border"
              selected={checkIn}
              onChange={(date) => setCheckIn(date)}
            />
          </div>
          {/* <div className="flex justify-between items-center gap-2">
            <span className="font-medium text-sm">Check Out</span>
            <DatePicker
              className=" p-2 border"
              selected={checkOut}
              onChange={(date) => setCheckOut(date)}
            />
          </div> */}
          <button
            onClick={handleBooking}
            className="w-full btn btn-sm md:btn-md rounded-none border-none bg-[#B94545] hover:bg-[#b94545e5] text-white hover:text-black uppercase uppercas"
          >
            Book Now
          </button>
        </div>
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="booking-modal" className="modal ">
        <div className="modal-box rounded-none flex flex-col justify-center items-center">
          {/* steps of action  */}
          <div className="md:-mt-20 mb-10">
            <ul className="steps mt-4 md:mt-28 -mb-5">
              <li className="step after:!w-6 after:!h-6 text-sm font-thin step-neutral">
                Search
              </li>
              <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin step-neutral">
                Booking
              </li>
              <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin step-neutral">
                Checkout
              </li>
              <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin">
                Thank You
              </li>
            </ul>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <div className="flex overflow-x-auto">
                <table className="table ">
                  {/* head */}
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Night/s</th>
                      <th>Price</th>
                      <th>Booking Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <th>1</th>
                      <td>{price}</td>
                      <td>{checkIn.toLocaleDateString()}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between mt-5">
                <button className="btn btn-error btn-sm md:btn-md rounded-none border-none uppercase uppercas font-light">
                  Cancel
                </button>
                <button
                  onClick={handleConfirmBooking}
                  className=" btn btn-sm btn-success md:btn-md rounded-none border-none uppercase uppercas font-medium"
                >
                  Confirm Booking
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Room;
