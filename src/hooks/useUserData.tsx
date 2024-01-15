import { useEffect, useState } from "react";

const useUserData = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setEror] = useState(false);
  const [data, setData] = useState([]);
  const controller = new AbortController();
  const url = "https://jsonplaceholder.typicode.com/users";

  const getUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      setLoading(false);
      setData(data);
    } catch (error) {
      console.log(error);
      setEror(true);
    }
  };

  useEffect(() => {
    getUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
};

export default useUserData;
