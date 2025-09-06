import { CustomLegend } from '@components/index';
import { useDoughnutChart } from '@hooks/useDoughnutChart';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from './Chart.module.scss';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart: React.FC = () => {
  const baseColors = ['#66CDFF', '#FF5555', '#FFC94F', '#37D881'];
  const data = {
    labels: ['Группа ИнтерРАО', 'Free Float', 'Роснефтегаз', 'ФСК ЕЭС'],
    datasets: [{ data: [50, 25, 15, 10], backgroundColor: [...baseColors], borderWidth: 0 }]
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
