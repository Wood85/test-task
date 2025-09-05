import { ShareholdersTable, UpdateDate } from "@components/index";

import styles from "./ShareholderStructure.module.scss";

export const ShareholderStructure = () => {
  return (
    <section className={styles.block}>
      <h1 className={styles.title}>Структура акционеров</h1>
      <div className={styles.infoContainer}>
        <div className={styles.tableContainer}>
          <ShareholdersTable />
          <UpdateDate />
        </div>
        <div className={styles.chart}></div>
      </div>
    </section>
  );
};
