import { Table } from "antd";

import { dataSource, getColumns } from "@data/tableData";

import styles from "./ShareholdersTable.module.scss";

export const ShareholdersTable = () => {
  return (
    <Table
      className={styles.table}
      dataSource={dataSource}
      columns={getColumns(styles.holder, styles.share)}
      pagination={false}
      bordered={false}
    />
  );
};
