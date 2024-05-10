import Banner from "../components/Banner";
import SectionTitle from "../components/SectionTitle";
import image1 from "../assets/images/image1.jpg";
const About = () => {
  return (
    <div>
      <Banner text={`About Us`} />
      {/* content  */}
      <div className="my-5 md:my-10 flex flex-col md:flex-row justify-between items-center gap-2 ">
        <div className="flex-1 md:mr-20 relative">
          <img src={image1} alt="" />
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-10 bg-black p-8">
            <h3 className="text-3xl text-white md:text-5xl font-semibold">
              +75
            </h3>
            <h3 className="uppercase  text-white font-bold">Facilities</h3>
          </div>
        </div>
        <div className="flex-1">
          <SectionTitle
            h3={`DRINKS & BREAKFAST`}
            h1={`Al Inclusive`}
            text={`Dear Guests,

We are thrilled to welcome you to our hotel! At our establishment, we strive to provide a memorable and comfortable experience for each and every guest. As the manager, I want to assure you that your satisfaction is our top priority. `}
          />
          <div className="chat chat-start pl-10">
            <div className="chat-bubble">
              <p className="text-sm text-gray-400 mt-2">
                From our luxurious amenities to our attentive staff, we are
                dedicated to ensuring your stay exceeds expectations. Whether
                you are here for business or leisure, we aim to make your time
                with us unforgettable. Thank you for choosing our hotel, and we
                look forward to serving you soon!
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="avatar">
              <div className="w-12 mask mask-squircle">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>

            <div className="mt-3">
              <p className="font-semibold text-lg">Holy Khatun</p>
              <p className="text-sm text-gray-400">Hotel manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
