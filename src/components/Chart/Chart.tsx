import { CustomLegend } from '@components/index';
import { baseColors } from '@data/chartBaseColors';
import type { NormalizedShareholder } from '@definitions/shareholder';
import { useDoughnutChart } from '@hooks/useDoughnutChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.scss';

interface ChartProps {
  shareholders: NormalizedShareholder[];
}

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ shareholders }: ChartProps) => {
  const labels = shareholders.map((shareholder) => shareholder.holder);
  const percents = shareholders.map((shareholder) => shareholder.share_percent);

  const data = {
    labels: [...labels],
    datasets: [{ data: [...percents], backgroundColor: [...baseColors], borderWidth: 0 }]
  };

  const { chartRef, options } = useDoughnutChart(baseColors);

  return (
    <div className={styles.container}>
      <div className={styles.doughnutContainer}>
        <Doughnut ref={chartRef} data={data} options={options} />
      </div>
      <div className={styles.legend}>
        <CustomLegend labels={data.labels} colors={baseColors} />
      </div>
    </div>
  );
};
