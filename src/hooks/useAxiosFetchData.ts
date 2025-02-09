/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import axios from "axios";

export const useAxiosFetchData = (url: string) => {
  const [data, setData] = useState<any>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((errorMsg) => {
        setError(errorMsg);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { data, error, isLoading };
};