import React from 'react';
import styles from './WeightSelector.module.css';

const WeightSelector = ({ options, onSelect, selected }) => {
  return (
    <div className={styles.weightSelector}>
      <h4 className={styles.selectorTitle}>Zważ wagę</h4>
      <div className={styles.weightButtons}>
        {options.map((option, index) => (
          <button
            key={index}
            className={`${styles.weightButton} ${
              selected?.weight === option.weight ? styles.active : ''
            }`}
            onClick={() => onSelect(option)}
          >
            {option.weight} - {option.price} zł
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeightSelector;