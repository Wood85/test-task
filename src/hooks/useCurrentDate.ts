import { useState, useEffect } from 'react';

export const useCurrentDate = () => {
  const [date, setDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    setDate(`${day}.${month}.${year}`);
  }, []);

  return date;
};
