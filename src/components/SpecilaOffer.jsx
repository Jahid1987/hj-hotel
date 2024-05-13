import { useEffect, useState } from "react";
import image2 from "../assets/images/image2.jpg";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
const SpecilaOffer = () => {
  const [specialRoom, setSpecialRoom] = useState({});
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    const specailaModal = document.getElementById("offer-modal");
    specailaModal.showModal();
    setTimeout(() => {
      specailaModal.close();
    }, 4000);
    // fetching single room for specal offer
    axiosSecure
      .get("/rooms/663f863c03fcb459b1dea840")
      .then((res) => setSpecialRoom(res.data));
  }, []);
  return (
    <dialog id="offer-modal" className="modal">
      <div className="modal-box rounded-none relative">
        <Link to="/room/663f863c03fcb459b1dea840">
          <img src={image2} alt="" />{" "}
        </Link>

        <p
          onClick={() => document.getElementById("offer-modal").close()}
          className="absolute right-2 text-red-500 font-light top-0"
        >
          X
        </p>
        <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-2xl font-thin">
          {specialRoom.price}/ <span className="text-xl">Per Night</span>
        </p>
      </div>
    </dialog>
  );
};

export default SpecilaOffer;
