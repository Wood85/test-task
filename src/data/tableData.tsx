import { NormalizedShareholder } from '@definitions/shareholder';
import type { ColumnsType } from 'antd/es/table';

export const getColumns = (
  holderStyle: string,
  shareStyle: string
): ColumnsType<NormalizedShareholder> => {
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
      render: (value: number) => <span className={shareStyle}>{`${value} %`}</span>
    }
  ];
};
