import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Button from "../Button";
// featured images
import featured4 from "../../assets/images/image14.jpg";
import featured5 from "../../assets/images/image12.jpg";
import featured6 from "../../assets/images/image16.jpg";
import featured7 from "../../assets/images/image17.jpg";
import featured8 from "../../assets/images/image18.jpg";
import useFetch from "../../hooks/useFetch";
const Featured = () => {
  AOS.init();
  const [docs, isLoading, error] = useFetch("premiumrooms");
  console.log(docs, isLoading, error);
  return (
    <div className="flex items-center gap-2 my-5 md:my-10">
      <div className="space-y-2 flex-1">
        <h3>BEST STAY IN THE TOWN</h3>
        <h1>Reserve a Suite </h1>
        <p>
          Quisque eu euismod arcu. Morbi et dapibus diam, sed interdum velit.
          Proin tempor nunc vel nisl condimentum, nec tempor risus.
        </p>
        <Button name="Book Our Featured Room" />
        <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <div className="h-44 w-full ">
            <img
              className="h-full w-full object-cover"
              src={featured4}
              alt=""
            />
          </div>
          <div className="h-44 w-full">
            <img
              className="h-full w-full object-cover"
              src={featured5}
              alt=""
            />
          </div>
          <div className="h-44 w-full">
            <img
              className="h-full w-full object-cover"
              src={featured6}
              alt=""
            />
          </div>
          <div className="h-44 w-full">
            <img
              className="h-full w-full object-cover"
              src={featured7}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-1">
        <img src={featured8} alt="" />
      </div>
    </div>
  );
};

export default Featured;
