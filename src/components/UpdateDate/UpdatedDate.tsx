import { UPDATE_DATE_TEXT } from '@data/titles';
import { useCurrentDate } from '@hooks/useCurrentDate';

import styles from './UpdatedDate.module.scss';

export const UpdatedDate = () => {
  const currentDate = useCurrentDate();

  return <div className={styles.updatedDate}>{`${UPDATE_DATE_TEXT} ${currentDate}`}</div>;
};
