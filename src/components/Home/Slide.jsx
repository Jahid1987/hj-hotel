import Button from "../Button";

const Slide = ({ image }) => {
  return (
    <div
      className="hero h-[400px] md:h-[500px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="w-full lg:w-2/3">
          <h3 className="mb-5 font-bold uppercase">best stay in town</h3>
          <h1 className="mb5 font-light text-3xl md:text-5xl">HJ Hotel</h1>
          <div className="relative mt-5">
            <div className="absolute inset-0 bg-black transform -skew-x-12 opacity-30 z-0"></div>
            <p data-aos="fade-left" className="mb-5 z-50 p-10">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div data-aos="fade-left">
            <Button name="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
