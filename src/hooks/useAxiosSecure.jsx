import axios from "axios";
// import { useEffect } from "react";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://hj-hotel.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { signOutUser } = useAuth();
  // const navigate = useNavigate();

  // useEffect(() => {
  //   axiosSecure.interceptors.response.use(
  //     (res) => {
  //       return res;
  //     },
  //     (error) => {
  //       console.log("error tracked in interceptor", error);
  //       if (error.response.status === 401 || error.response.status === 403) {
  //         console.log("Logout the user");
  //         signOutUser()
  //           .then(() => {
  //             navigate("/login");
  //           })
  //           .catch((err) => console.log(err));
  //       }
  //     }
  //   );
  // });

  return axiosSecure;
};

export default useAxiosSecure;
