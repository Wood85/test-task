import type { ColumnsType } from "antd/es/table";

import { Shareholder } from "@definitions/shareholder";

export const dataSource: Shareholder[] = [
  {
    key: 1,
    holder: "Группа ИнтерРАО",
    share_percent: "32.56 %",
  },
  {
    key: 2,
    holder: "Free Float",
    share_percent: "31.24 %",
  },
  {
    key: 3,
    holder: "Роснефтегаз",
    share_percent: "27.63 %",
  },
  {
    key: 4,
    holder: "ФСК ЕЭС",
    share_percent: "8.57 %",
  },
];

export const getColumns = (
  holderStyle: string,
  shareStyle: string,
): ColumnsType<Shareholder> => {
  return [
    {
      title: "Держатель акции",
      dataIndex: "holder",
      key: "holder",
      render: (text: string) => <span className={holderStyle}>{text}</span>,
    },
    {
      title: "% Доли",
      dataIndex: "share_percent",
      key: "share_percent",
      render: (text: string) => <span className={shareStyle}>{text}</span>,
    },
  ];
};
