import React from 'react';
import styles from './StepsIndicator.module.css';

const steps = [
  { number: 1, label: 'Wybierz dania' },
  { number: 2, label: 'Podaj dane dostawy' },
  { number: 3, label: 'Podsumowanie zamówienia' },
  { number: 4, label: 'Płatność' }
];

const StepsIndicator = ({ currentStep }) => {
  return (
    <div className={styles.stepsContainer}>
      {steps.map((step, index) => (
        <div 
          key={index}
          className={`${styles.step} ${index < currentStep ? styles.active : ''}`}
        >
          <div className={styles.stepNumber}>{step.number}</div>
          <div className={styles.stepLabel}>{step.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StepsIndicator;