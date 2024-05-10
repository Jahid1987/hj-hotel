import aboutImg from "../assets/images/about.jpg";
const Banner = ({ text }) => {
  return (
    <div
      className="grid place-content-center py-10"
      style={{
        background: `linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url(${aboutImg}) lightgray 50% / cover no-repeat`,
      }}
    >
      <h3 className="text-3xl md:text-5xl text-white font-semibold">{text}</h3>
    </div>
  );
};

export default Banner;
