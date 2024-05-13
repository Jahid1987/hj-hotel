import areaIcon from "../../assets/icons/icon-plan-grey.svg";
import userIcon from "../../assets/icons/icon-user-grey.svg";
import calenderIcon from "../../assets/icons/icon-calendar-grey.svg";
import bedIcon from "../../assets/icons/icon-bed-grey.svg";
const RoomDetails = ({ room }) => {
  const {
    category,
    description,
    special_offers,
    image,
    price,
    reviews,
    guest,
    size,
    status,
  } = room;
  return (
    <div className="md:col-span-2">
      <img src={image} alt={`immage of ${category}`} />
      <div className="mt-3 md:mt-6 flex justify-between text-gray-400">
        <div className="flex gap-2  flex-col justify-center items-center font-light">
          <img className=" w-5 lg:w-10" src={userIcon} alt="" />
          <p>{guest} Guests</p>
        </div>
        <div className="flex gap-2  flex-col justify-center items-center font-light">
          <img className=" w-5 lg:w-10" src={areaIcon} alt="" />
          <p>{size} ft</p>
        </div>
        <div className="flex gap-2  flex-col justify-center items-center font-light">
          <img className=" w-5 lg:w-10" src={bedIcon} alt="" />
          <p>{price}/ per night</p>
        </div>
        <div className="flex gap-2 flex-col justify-center items-center font-light">
          <img className=" w-5 lg:w-10" src={calenderIcon} alt="" />
          <p>{status}</p>
        </div>
      </div>
      <div className="divider"></div>
      <div>
        <p className="font-light">{description}</p>
      </div>
      <div className="divider"></div>
      <div className="space-y-2">
        <h3 className="font-light text-xl">Special Offers: </h3>
        <p className="font-light">
          {special_offers?.length
            ? special_offers[0]
            : "No Special Offer is Applicable"}
        </p>
      </div>
      <div className="divider"></div>
      <div className="space-y-2">
        <h3 className="font-light text-xl">User Reviews: </h3>
        {/* i must make it a different component  */}
        <p className="font-light">
          {reviews?.length > 1
            ? reviews.map((review) => (
                <span className="block mb-2" key={review?.comment}>
                  {review?.comment},{" "}
                  <span className="font-medium">{review?.user}</span>
                </span>
              ))
            : "No reviews yet"}
        </p>
      </div>
    </div>
  );
};

export default RoomDetails;
