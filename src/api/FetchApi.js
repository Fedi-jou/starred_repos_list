import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const res = await axios.get(url);
        const data = await res.data;
        setResponse(data);
      } catch (error) {
        setError(error);
      }
    };

    Fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return response;
};

export default useFetch;
