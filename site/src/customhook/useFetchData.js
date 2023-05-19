import axios from "axios";
import { useEffect, useState } from "react";

const useFetchPost = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const baseurl = `${process.env.REACT_APP_BASE_URL}`;
  axios.defaults.baseURL = baseurl;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      await axios
        .get(url)
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          setLoading(false);
        });
    }

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchPost;
