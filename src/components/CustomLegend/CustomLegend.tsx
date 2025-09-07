import React from 'react';

import styles from './CustomLegend.module.scss';

interface LegendProps {
  labels: string[];
  colors: string[];
}

export const CustomLegend: React.FC<LegendProps> = ({ labels, colors }) => {
  return (
    <div className={styles.container}>
      {labels.map((label, index) => (
        <div key={label} className={styles.item}>
          <div style={{ backgroundColor: colors[index] }} className={styles.label} />
          <div className={styles.text}>{label}</div>
        </div>
      ))}
    </div>
  );
};
