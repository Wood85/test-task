import { ShareholderStructure } from '@components/index';
import shareholdersData from '@data/data.json';
import type { Shareholder, NormalizedShareholder } from '@definitions/shareholder';
import { getUsers } from '@services/dataRequest';
import { normalizeShareholders } from '@utils/normalizeShareholders';
import { useEffect, FC, useState } from 'react';

import styles from './MainPage.module.scss';

export const MainPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [shareholders, setShareholders] = useState<NormalizedShareholder[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersData = await getUsers();
        console.log('data: ', usersData);
        const localShareholders: Shareholder[] = shareholdersData?.SBER || [];
        const normalized = normalizeShareholders(localShareholders);
        setShareholders(normalized);
      } catch (err) {
        console.log('error: ', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className={styles.page}>
      {isLoading && <p>Loading...</p>}
      {!isLoading && <ShareholderStructure data={shareholders} />}
    </main>
  );
};
