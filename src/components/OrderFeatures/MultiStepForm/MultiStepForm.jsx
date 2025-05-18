import React, { useState } from "react";
import styles from "./MultiStepForm.module.css";

const MultiStepForm = ({ children, initialStep = 0 }) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const steps = React.Children.toArray(children);

  const next = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className={styles.multiStepForm}>
      {steps[currentStep]}

      <div className={styles.navigation}>
        {currentStep > 0 && (
          <button onClick={prev} className={styles.btn}>
            Wstecz
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={next} className={styles.btn}>
            Dalej
          </button>
        ) : (
          <button type="submit" className={styles.btn}>
            Złóż zamówienie
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
