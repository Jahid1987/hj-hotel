const Review = ({ review }) => {
  // console.log(review);
  return (
    <div className="h-80 flex flex-col justify-between mx-auto p-8 bg-white rounded-md shadow-lg dark:bg-gray-800  my-5">
      <p className="leading-loose text-gray-500 dark:text-gray-400">
        “{review.comment.substring(0, 100)}...”
      </p>

      <div className="flex items-center mt-6">
        <img
          className="object-cover mx-2 rounded-full w-14 h-14"
          src={review?.image}
          alt=""
        />

        <div className="mx-2">
          <h1 className="font-semibold text-gray-800 dark:text-white">
            {review.user}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
