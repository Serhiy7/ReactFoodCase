import React, { useState } from 'react';
import styles from './MultiStepForm.module.css';
import { useMultiStepForm } from './useMultiStepForm';

const MultiStepForm = ({ children }) => {
  const {
    currentStep,
    steps,
    next,
    prev,
    goTo,
    isFirstStep,
    isLastStep
  } = useMultiStepForm(children);

  return (
    <div className={styles.multiStepForm}>
      <div className={styles.stepsIndicator}>
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`${styles.step} ${currentStep === index ? styles.active : ''}`}
          >
            {index + 1}. {step.props.title}
          </button>
        ))}
      </div>
      
      <div className={styles.formContent}>
        {currentStep}
      </div>
      
      <div className={styles.formControls}>
        {!isFirstStep && (
          <button type="button" onClick={prev} className={styles.prevButton}>
            Wstecz
          </button>
        )}
        
        {!isLastStep ? (
          <button type="button" onClick={next} className={styles.nextButton}>
            Dalej
          </button>
        ) : (
          <button type="submit" className={styles.submitButton}>
            Złóż zamówienie
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;