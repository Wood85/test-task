import shareholdersData from '@data/data.json';
import type { Shareholder, NormalizedShareholder } from '@definitions/shareholder';
import { getUsers } from '@services/dataRequest';
import { normalizeShareholders } from '@utils/normalizeShareholders';
import { useState, useEffect } from 'react';

export const useShareholders = () => {
  const [shareholders, setShareholders] = useState<NormalizedShareholder[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        console.log('Users data:', usersData);
        const localShareholders: Shareholder[] = shareholdersData?.SBER || [];
        const normalized = normalizeShareholders(localShareholders);

        setShareholders(normalized);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error(err);
          setError(err);
        } else {
          const unknownError = new Error('Unknown error occurred');
          console.error(unknownError);
          setError(unknownError);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return { shareholders, isLoading, error };
};
