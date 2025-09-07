import { getColumns } from '@data/tableData';
import type { NormalizedShareholder } from '@definitions/shareholder';
import { Table } from 'antd';

import styles from './ShareholdersTable.module.scss';

interface ShareholdersTableProps {
  data: NormalizedShareholder[];
}

export const ShareholdersTable = ({ data }: ShareholdersTableProps) => {
  return (
    <Table
      className={styles.table}
      dataSource={data}
      columns={getColumns(styles.holder, styles.share)}
      pagination={false}
      bordered={false}
    />
  );
};
