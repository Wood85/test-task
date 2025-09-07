import { type ChartOptions, type Chart as ChartType } from 'chart.js';
import { useRef } from 'react';

export const useDoughnutChart = (baseColors: string[], rotation = 80) => {
  const chartRef = useRef<ChartType<'doughnut'>>(null);

  const options: ChartOptions<'doughnut'> = {
    cutout: '60%',
    responsive: true,
    maintainAspectRatio: true,
    rotation,
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: '#FFFFFF',
        titleColor: '#172339',
        bodyColor: '#172339',
        yAlign: 'bottom',
        xAlign: 'center',
        padding: 16,
        borderColor: '#BFDCEC',
        borderWidth: 1,
        displayColors: false,
        bodyFont: { family: 'Montserrat', size: 14 },
        titleFont: { family: 'Montserrat', size: 14, weight: 500 },
        callbacks: {
          label: function (tooltipItem) {
            const value = tooltipItem.raw;
            return `${value}%`;
          }
        }
      }
    },
    onHover: (event, elements) => {
      const chart = chartRef.current;
      if (!chart) return;

      const dataset = chart.data.datasets[0];
      if (!dataset) return;

      if (elements.length > 0) {
        const hoveredIndex = elements[0].index;
        dataset.backgroundColor = baseColors.map((color, i) =>
          i === hoveredIndex ? color : color + '55'
        );
        (event.native?.target as HTMLElement).style.cursor = 'pointer';
      } else {
        dataset.backgroundColor = [...baseColors];
        (event.native?.target as HTMLElement).style.cursor = 'default';
      }

      chart.update();
    },
    animation: { duration: 300, easing: 'easeOutCubic' }
  };

  return { chartRef, options };
};
