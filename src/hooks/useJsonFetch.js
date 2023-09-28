import { useEffect, useState } from 'react';

export const useJsonFetch = (url, opts) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error('Ошибка ответа');
        }
        // больше try...catch богу try...catch
        try {
          const data = await response.json();
          setData(data);
        } catch {
          throw new Error('Неправильный JSON');
        }
        setError(null);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return [data, loading, error];
};
