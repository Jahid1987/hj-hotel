import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useFetch = (url) => {
  const axiosSecure = useAxiosSecure();
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setIsloading(true);
      const { data } = await axiosSecure.get(`${url}`);
      setDocs(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setIsloading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  // Function to refetch data
  async function refetchData() {
    await fetchData();
  }
  return { docs, isLoading, error, refetchData };
};

export default useFetch;
