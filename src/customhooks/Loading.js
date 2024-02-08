import { useState, useEffect } from 'react';

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Cleanup function to clear the timeout when the component unmounts
    return () => clearTimeout(timeoutId);
  }, []);

  return loading;
};

export default useLoading;
