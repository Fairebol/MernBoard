import { useState, useEffect } from 'react';
import dbFetch from '../api/dbFetch';

export default function useTopCountries() {
  const [topCountries, setTopCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const data = await dbFetch();
      const dataCount = data.reduce((acc, curr) => {
        acc[curr.country] = (acc[curr.country] || 0) + 1;
        return acc;
      }, {});

      const topCountries = Object.entries(dataCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 6)
        .filter(item => item[0] !== "");

      setTopCountries(topCountries);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return [topCountries, isLoading];
}