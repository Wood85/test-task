import { Shareholder } from '@definitions/shareholder';
import type { ColumnsType } from 'antd/es/table';

export const dataSource: Shareholder[] = [
  {
    key: 1,
    holder: 'Группа ИнтерРАО',
    share_percent: '32.56 %'
  },
  {
    key: 2,
    holder: 'Free Float',
    share_percent: '31.24 %'
  },
  {
    key: 3,
    holder: 'Роснефтегаз',
    share_percent: '27.63 %'
  },
  {
    key: 4,
    holder: 'ФСК ЕЭС',
    share_percent: '8.57 %'
  }
];

export const getColumns = (holderStyle: string, shareStyle: string): ColumnsType<Shareholder> => {
  return [
    {
      title: 'Держатель акции',
      dataIndex: 'holder',
      key: 'holder',
      width: '62.7%',
      className: 'leftCol',
      render: (text: string) => <span className={holderStyle}>{text}</span>
    },
    {
      title: '% Доли',
      dataIndex: 'share_percent',
      key: 'share_percent',
      width: '37.3%',
      className: 'rightCol',
      render: (text: string) => <span className={shareStyle}>{text}</span>
    }
  ];
};
