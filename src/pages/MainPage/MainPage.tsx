import { ShareholderStructure } from "@components/index";

import styles from "./MainPage.module.scss";

export const MainPage = () => {
  return (
    <main className={styles.page}>
      <ShareholderStructure />
    </main>
  );
};
