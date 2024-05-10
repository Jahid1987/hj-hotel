import featured4 from "../../assets/images/image14.jpg";
const FeaturedCard = ({ room }) => {
  return (
    <div className="h-44 w-full relative">
      <img className="h-full w-full object-cover" src={featured4} alt="" />
      <div className="absolute top-0 right-0 text-white flex flex-col justify-between h-full">
        <p
          data-aos="fade-up"
          className="bg-[#B94545] p-1 font-bold rounded-bl-lg pl-5"
        >
          ${room.price}
        </p>
        <p className="bg-black p-1 font-bold rounded-bl-lg pl-5">
          {room.category}
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard;
