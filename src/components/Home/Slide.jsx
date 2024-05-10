import Button from "../Button";

const Slide = ({ image }) => {
  return (
    <div
      className="hero h-[400px] md:h-[500px]"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Button name="Continue" />
        </div>
      </div>
    </div>
  );
};

export default Slide;
