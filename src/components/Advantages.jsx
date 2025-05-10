import React from 'react';
import styles from './Advantages.module.css';
import { ADVANTAGES_DATA } from '../../utils/constants';
import AdvantageItem from './AdvantageItem';

const Advantages = () => (
  <div className={styles.container}>
    {ADVANTAGES_DATA.map((item, index) => (
      <AdvantageItem key={index} icon={item.icon} text={item.text} />
    ))}
  </div>
);

export default Advantages;