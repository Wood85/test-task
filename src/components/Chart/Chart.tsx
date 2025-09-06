import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartOptions,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

import { CustomLegend } from "@components/index";

import styles from "./Chart.module.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart: React.FC = () => {
  const data = {
    labels: ["Группа ИнтерРАО", "Free Float", "Роснефтегаз", "ФСК ЕЭС"],
    datasets: [
      {
        data: [50, 25, 15, 10],
        backgroundColor: ["#66CDFF", "#FF5555", "#FFC94F", "#37D881"],
        borderWidth: 0,
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    cutout: "60%",
    responsive: true,
    maintainAspectRatio: false,
    rotation: 80,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.doughnutContainer}>
        <Doughnut data={data} options={options} />
      </div>
      <CustomLegend
        labels={data.labels}
        colors={data.datasets[0].backgroundColor}
      />
    </div>
  );
};
