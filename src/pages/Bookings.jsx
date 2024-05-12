import { Link } from "react-router-dom";
import Banner from "../components/Bookings/Banner";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
import Update from "../components/Bookings/Update";
import { useState } from "react";
import Review from "../components/Bookings/Review";
const Bookings = () => {
  const { user } = useAuth();
  const { docs: bookings, refetchData } = useFetch(`/bookings/${user.email}`);
  const [updateRoom, setUpdateRoom] = useState({});
  const [roomReview, setRoomReview] = useState({});

  async function handleDelete(booking) {
    Swal.fire({
      title: "Sure to Cancel?",
      text: "You won't be able to get this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Cancel it Anyway!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/bookings/${booking._id}`, {
            withCredentials: true,
          });
          await axios.patch(`http://localhost:5000/rooms/${booking.room_id}`, {
            status: "available",
          });
          await refetchData();
          Swal.fire({
            title: "Room Cancelled!",
            text: "Your room has been Cancelled.",
            icon: "success",
          });
        } catch (err) {
          console.log(err);
        }
      }
    });
  }
  // show update modal
  function showUpdateModal(booking) {
    setUpdateRoom(booking);
    document.getElementById("update-modal").showModal();
  }
  // show review modal
  function handleReview(booking) {
    setRoomReview(booking);
    document.getElementById("review-modal").showModal();
  }
  return (
    <div>
      {/* banner  */}
      <Banner />
      <div className="overflow-x-auto my-5 md:my-20">
        {!bookings.length > 0 ? (
          <h3 className="text-center text-xl font-light">
            You have not booked any room yet.
            <Link className="btn btn-link" to="/rooms">
              Book here
            </Link>
          </h3>
        ) : (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Image</th>
                <th>Category</th>
                <th>Booking Date</th>
                <th>Review</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* rows of bokings */}
              {bookings.map((booking) => (
                <tr key={booking._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-parallelogram w-16">
                          <img
                            src={booking.image}
                            alt={`image of ${booking.category}`}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{booking.category}</td>
                  <td>{booking.checkIn}</td>
                  <td>
                    <button
                      onClick={() => handleReview(booking)}
                      className="btn btn-xs flex items-center font-light border-none bg-[#B94545] hover:bg-[#b94545e5] text-white hover:text-black uppercase uppercas"
                    >
                      Reviw
                    </button>
                  </td>
                  <th className="text-xl md:text-2xl flex flex-col gap-2">
                    <MdDeleteForever
                      onClick={() => handleDelete(booking)}
                      className="text-red-600"
                    />
                    <CiEdit
                      onClick={() => showUpdateModal(booking)}
                      className="text-green-600 mb-2"
                    />
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {/* Update modal  */}
      <dialog id="update-modal" className="modal">
        <div className="modal-box h-full md:h-1/2 rounded-none flex flex-col justify-center items-center">
          <Update refetchData={refetchData} room={updateRoom} />
        </div>
      </dialog>
      {/* Review add modal  */}
      <dialog id="review-modal" className="modal">
        <div className="modal-box h-full md:h-1/2 rounded-none flex flex-col justify-center items-center">
          <Review roomReview={roomReview} />
        </div>
      </dialog>
    </div>
  );
};

export default Bookings;
