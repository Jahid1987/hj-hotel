import { MdOutlineRateReview } from "react-icons/md";
import { PiResizeDuotone } from "react-icons/pi";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from "react-router-dom";
const Card = ({ room }) => {
  const { category, description, image, price, reviews, size, _id } = room;
  return (
    <div className="card w-full border rounded-none">
      <Link to={`/room/${_id}`}>
        <figure className="h-[220px] w-full">
          <img className="h-full w-full object-cover" src={image} alt="Shoes" />
        </figure>
      </Link>
      <div className="card-body font-light">
        <h2 className="card-title font-light">{category}</h2>
        <div className="flex justify-between">
          <p className="text-sm flex gap-2 items-center">
            <PiResizeDuotone /> {size} sqr feet
          </p>
          <p className="text-sm flex gap-2 items-center">
            <MdOutlineRateReview />{" "}
            {reviews.length ? reviews.length : "No reviews yet"}
          </p>
        </div>
        <p className="text-sm">{description}</p>

        <div className="card-actions justify-end ">
          <button className="btn w-full rounded-none border border-gray-400 flex items-center">
            Book Now for <TbCurrencyTaka className="-mr-2 text-lg" />
            {price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
