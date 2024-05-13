const Review = ({ review }) => {
  // console.log(review);
  return (
    <div className=" h-80 w-[90%]  flex flex-col justify-between mx-auto p-8 bg-white rounded-md shadow-lg dark:bg-gray-800  my-5">
      <p className="leading-loose text-gray-500 dark:text-gray-400">
        “{review.comment.substring(0, 200)}...”
      </p>

      <div className="flex items-center mt-6">
        <img
          className="object-cover mx-2 rounded-full w-14 h-14"
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          alt=""
        />

        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">
            {review.user}
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            CTO, Robert Consultency
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
