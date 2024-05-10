import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetch = (url) => {
  const axiosSecure = useAxiosSecure();
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axiosSecure.get(`${url}`);
        setDocs(data);
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setIsloading(false);
      }
    }

    fetchData();
  }, []);

  return [docs, isLoading, error];
};

export default useFetch;
