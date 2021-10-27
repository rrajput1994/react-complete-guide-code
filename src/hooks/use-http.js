import { useState } from "react";

const useHttp = (httpURL, applyData) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const resquestHttp = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(httpURL.url, {
        method: httpURL.method,
        headers: httpURL.headers,
        body: JSON.stringify(httpURL.body),
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  };

  return {
    isLoading,
    error,
    resquestHttp,
  };
};

export default useHttp;
