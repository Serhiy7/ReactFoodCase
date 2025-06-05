// src/components/OrderFeatures/MultiStepForm/MultiStepForm.jsx
import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./MultiStepForm.module.css";

const MultiStepForm = ({
  children,
  initialStep = 0,
  onValidateStep = [], // массив функций валидации, длина должна совпадать с количеством шагов
  onStepChange = () => {}, // коллбэк: вызывается каждый раз, когда currentStep изменился
}) => {
  const steps = React.Children.toArray(children);
  const [currentStep, setCurrentStep] = useState(initialStep);

  // При первом рендере уведомим родителя, какой шаг в самом деле выставлен
  useEffect(() => {
    onStepChange(currentStep);
  }, [currentStep, onStepChange]);

  const goNext = useCallback(() => {
    const validator = onValidateStep[currentStep];
    // Если есть валидатор — вызываем. Если его нет, просто true
    const isValid = typeof validator === "function" ? validator() : true;

    if (!isValid) {
      // Можно опционально: показать какую-то ошибку
      return;
    }

    const nextStep = Math.min(currentStep + 1, steps.length - 1);
    setCurrentStep(nextStep);
    // onStepChange сработает автоматически в useEffect выше
  }, [currentStep, onValidateStep, steps.length, onStepChange]);

  const goPrev = useCallback(() => {
    const prevStep = Math.max(currentStep - 1, 0);
    setCurrentStep(prevStep);
    // onStepChange сработает в useEffect
  }, [currentStep, onStepChange]);

  return (
    <div className={styles.multiStepForm}>
      {/* Здесь рендерим только активный шаг */}
      <div className={styles.stepContent}>{steps[currentStep]}</div>

      {/* Общая панель навигации «Wstecz / Dalej» */}
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
