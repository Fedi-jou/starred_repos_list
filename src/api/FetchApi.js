import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [response, setResponse] = useState(null);

  useEffect(async () => {
    const res = await axios.get(url);
    const data = await res.data;
    setResponse(data);
  }, []);

  return response;
};

export default useFetch;
