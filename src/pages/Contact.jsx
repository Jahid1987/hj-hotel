import Banner from "../components/Banner";
import contactImg from "../assets/images/contact.jpg";
import image18 from "../assets/images/image18.jpg";
import image19 from "../assets/images/image19.jpg";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
const Contact = () => {
  return (
    <div>
      <Banner image={contactImg} text={`Contact Us`} />
      {/* description section */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        <div className=" w-full md:w-5/6 border pl-16 pr-2 py-3 md:py-6 relative  my-5 md:my-10">
          <div className="absolute md:block left-1 top-1/2 -translate-y-1/2 md:-left-8">
            <div className="avatar">
              <div className="w-12 md:w-20 rounded-full">
                <img src={image18} />
              </div>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-xl md:text-3xl font-normal">
              Reception Always Open
            </h3>
            <p className="text-sm text-gray-400">
              At HJ Hotel, our commitment to your comfort knows no bounds. Our
              dedicated reception team stands ready to welcome you with open
              arms at any hour, day or night.
            </p>
          </div>
        </div>
        <div className="  w-full md:w-5/6 border pl-16 pr-2 py-3 md:py-6 relative  my-5 md:my-10">
          <div className="absolute  md:block left-1 top-1/2 -translate-y-1/2 md:-left-8">
            <div className="avatar">
              <div className="w-12 md:w-20 rounded-full">
                <img src={image19} />
              </div>
            </div>
          </div>
          <div className="space-y-2 md:space-y-3">
            <h3 className="text-xl md:text-3xl font-normal">
              Online Reservations
            </h3>
            <p className="text-sm text-gray-400">
              Effortlessly secure your dream stay from the comfort of your own
              home or on the go, ensuring a seamless start to your journey with
              just a few clicks
            </p>
          </div>
        </div>
      </div>
      {/* contact form  */}
      <div className="flex items-center flex-col md:flex-row gap-2">
        <div className="w-full md:w-2/5 space-y-3">
          <SectionTitle
            h3={`CONTACT US`}
            h1={`Get In Touch`}
            text={`Your Direct Line to Personalized Assistance and Supportive Guidance. Whether you have inquiries, feedback, or special requests, our dedicated team is here to provide prompt and attentive assistance.`}
          />
          <Button name={`View Price`} />
        </div>
        <form className="card-body w-full md:w-3/5">
          <div className="form-control">
            <input
              type="text"
              placeholder="Name"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <div className="form-control">
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered rounded-none"
              required
            />
          </div>
          <textarea
            placeholder="Message"
            className="textarea textarea-bordered textarea-lg w-full rounded-none"
          ></textarea>

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">SECND</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
