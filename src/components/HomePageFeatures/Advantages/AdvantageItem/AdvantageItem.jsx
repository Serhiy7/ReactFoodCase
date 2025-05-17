import React from 'react';
import styles from './AdvantageItem.module.css';

const AdvantageItem = ({ icon, text }) => {
  return (
    <div className={styles.advants__item}>
      <div className={styles.advants__icon}>
        {icon}
      </div>
      <div className={styles.advants__text}>{text}</div>
    </div>
  );
};

export default AdvantageItem;
