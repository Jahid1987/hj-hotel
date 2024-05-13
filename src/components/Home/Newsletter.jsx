import image22 from "../../assets/images/image21.jpg";
import SectionTitle from "../SectionTitle";
function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex gap-3 md:gap-5 flex-col md:flex-row-reverse items-center my-5 md:my-20 lg:w-3/4 mx-auto">
        <div data-aos="fade-up" className="flex-1 w-full">
          <SectionTitle
            h3={`You should not miss it`}
            h1={`Subscribe to Our Newsletter`}
            text={`Elevate your inbox with exclusive updates, insider tips, and irresistible offers delivered straight to your fingertips. Join our vibrant community of travelers and enthusiasts as we embark on a journey filled with inspiration, discovery, and unforgettable experiences. Be the first to know about new destinations, exciting promotions, and insider insights curated just for you. Don't miss out – subscribe today and let the adventure begin!`}
          />
        </div>
        <div
          className="flex-1 w-full p-5 md:p-10 lg:p-20 "
          style={{
            backgroundImage: `url("${image22}")`,
            backgroundRepeat: "no-repeat",
            width: "250px",
            objectFit: "contain",
          }}
        >
          <form
            data-aos="fade-up"
            onSubmit={handleSubmit}
            className="newsletter-form"
          >
            <div
              data-aos="fade-up"
              className="flex fle flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row"
            >
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-none dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                placeholder="Email Address"
              />

              <button className="btn btn-sm md:btn-md rounded-none border-none bg-[#B94545] hover:bg-[#b94545e5] text-white hover:text-black uppercase uppercas">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
}

export default Newsletter;
