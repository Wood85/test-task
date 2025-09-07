import { ShareholderStructure, Spinner } from '@components/index';
import { useShareholders } from '@hooks/useShareholders';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const { shareholders, isLoading } = useShareholders();

  return (
    <main className={styles.page}>
      {isLoading && <Spinner />}
      {!isLoading && <ShareholderStructure data={shareholders} />}
    </main>
  );
};
