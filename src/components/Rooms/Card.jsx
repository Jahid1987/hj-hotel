const Card = ({ room }) => {
  const { category, description } = room;
  return (
    <div className="card w-full border rounded-none">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body font-light">
        <h2 className="card-title font-light">{category}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end ">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
