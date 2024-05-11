import { Link } from "react-router-dom";
import Banner from "../components/Bookings/Banner";
import useAuth from "../hooks/useAuth";
import useFetch from "../hooks/useFetch";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import axios from "axios";
import Swal from "sweetalert2";
const Bookings = () => {
  const { user } = useAuth();
  const [bookings] = useFetch(`/bookings/${user.email}`);

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
                  <th className="text-xl md:text-2xl flex flex-col gap-2">
                    <MdDeleteForever
                      onClick={() => handleDelete(booking)}
                      className="text-red-400"
                    />
                    <Link to={`/room/${booking.room_id}`}>
                      {" "}
                      <CiEdit className="text-green-400 mb-2" />
                    </Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Bookings;
