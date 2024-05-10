import SectionTitle from "../SectionTitle";

const Reviews = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 my-5 md:my-20">
      <div className="flex-1">
        <SectionTitle
          h3={"BEST FEATURED ROOMS"}
          h1={"Reserve a Suite"}
          text={`Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
          Proin tempor nunc vel nisl condimentum, nec tempor risus.`}
        />
      </div>
      <div className="flex-1" data-aos="fade-up"></div>
    </div>
  );
};

export default Reviews;
