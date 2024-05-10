import { FaCcMastercard } from "react-icons/fa";

import { Link } from "react-router-dom";

const TopNav = () => {
  return (
    <div className="max-w-[1440px] mx-auto bg-neutral text-neutral-content flex items-center justify-between">
      <div>
        <p className="pl-2 items-center flex gap-2">
          <FaCcMastercard className="inline" />
          PAYMENT OPTIONS
        </p>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-3 bg-[#B94545] p-2">
          <div className="w-10 rounded-full">
            <img
              className="rounded-full"
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
            />
          </div>
          <div>
            <p>My Account</p>
            <Link className="underline" to="/login">
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
