import { ShareholdersTable, UpdatedDate, Chart } from '@components/index';
import { MAIN_TITLE } from '@data/titles';
import type { NormalizedShareholder } from '@definitions/shareholder';

import styles from './ShareholderStructure.module.scss';

interface ShareholderStructureProps {
  data: NormalizedShareholder[];
}

export const ShareholderStructure = ({ data }: ShareholderStructureProps) => {
  return (
    <section className={styles.block}>
      <h1 className={styles.title}>{MAIN_TITLE}</h1>
      <div className={styles.infoContainer}>
        <div className={styles.tableContainer}>
          <ShareholdersTable data={data} />
          <UpdatedDate />
        </div>
        <div className={styles.chartContainer}>
          <div className={styles.chartWrap}>
            <Chart shareholders={data} />
          </div>
        </div>
      </div>
    </section>
  );
};
