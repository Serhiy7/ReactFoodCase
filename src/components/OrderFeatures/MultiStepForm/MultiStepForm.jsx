import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./MultiStepForm.module.css";

const MultiStepForm = ({
  children,
  initialStep = 0,
  onValidateStep = [],
  onStepChange = () => {},
}) => {
  const steps = React.Children.toArray(children);
  const [currentStep, setCurrentStep] = useState(initialStep);

  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const goNext = useCallback(() => {
    const validator = onValidateStep[currentStep];
    const isValid = typeof validator === "function" ? validator() : true;
    if (!isValid) return;
    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    setCurrentStep(nextStep);
  }, [currentStep, onValidateStep, steps.length]);

  const goPrev = useCallback(() => {
    const prevStep = Math.max(currentStep - 1, 0);
    setCurrentStep(prevStep);
  }, [currentStep]);

  return (
    <div className={styles.multiStepForm}>
      <div className={styles.stepContent}>{steps[currentStep]}</div>
      <div className={styles.navigation}>
        {currentStep > 0 && (
          <button onClick={goPrev} className={styles.btn}>
            Wstecz
          </button>
        )}
        {currentStep < steps.length - 1 ? (
          <button onClick={goNext} className={styles.btn}>
            Dalej
          </button>
        ) : (
          <button type="button" className={styles.btn} onClick={goNext}>
            Złóż zamówienie
          </button>
        )}
      </div>
    </div>
  );
};

MultiStepForm.propTypes = {
  children: PropTypes.node.isRequired,
  initialStep: PropTypes.number,
  onValidateStep: PropTypes.arrayOf(PropTypes.func),
  onStepChange: PropTypes.func,
};

export default React.memo(MultiStepForm);
