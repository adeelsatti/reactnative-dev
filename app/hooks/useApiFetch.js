import {useEffect, useState} from 'react';

const useApiFetch = url => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState(null);

  const fetchApi = async () => {
    try {
      const response = await fetch(url);
      const result = await response?.json();
      setData(result);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return {loading, error, data};
};

export default useApiFetch;
