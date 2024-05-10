const Button = ({ name }) => {
  return (
    <div className="btn btn-sm md:btn-md rounded-none border-none bg-[#B94545] hover:bg-[#b94545e5] text-white hover:text-black uppercase uppercas">
      {name}
    </div>
  );
};

export default Button;
