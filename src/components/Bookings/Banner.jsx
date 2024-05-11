import roomsImg from "../../assets/images/rooms.jpg";
const Banner = () => {
  return (
    <div
      className="grid place-content-center py-10"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url(${roomsImg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <div className="text-center">
        <h3 className="text-3xl md:text-5xl text-white font-semibold">
          Your All Bookings
        </h3>
        <ul className="steps text-white mt-4 md:mt-28 -mb-5">
          <li className="step after:!w-6 after:!h-6 text-sm font-thin step-neutral">
            Search
          </li>
          <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin step-neutral">
            Booking
          </li>
          <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin step-neutral">
            Checkout
          </li>
          <li className="step before:!h-[2px] after:!w-6 after:!h-6 text-sm font-thin step-neutral">
            Thank You
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
