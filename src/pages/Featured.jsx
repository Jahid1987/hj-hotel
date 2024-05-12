import useFetch from "../hooks/useFetch";

const Featured = () => {
  const { docs } = useFetch("/featuredrooms");
  console.log(docs);
  return (
    <div>
      <h3>All featured rooms</h3>
    </div>
  );
};

export default Featured;
