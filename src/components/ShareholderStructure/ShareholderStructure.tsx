import { ShareholdersTable, UpdateDate, Chart } from '@components/index';

import styles from './ShareholderStructure.module.scss';

export const ShareholderStructure = () => {
  return (
    <section className={styles.block}>
      <h1 className={styles.title}>Структура акционеров</h1>
      <div className={styles.infoContainer}>
        <div className={styles.tableContainer}>
          <ShareholdersTable />
          <UpdateDate />
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartWrap}>
            <Chart />
          </div>
        </div>
      </div>
    </section>
  );
};
