// src/components/OrderFeatures/OrderTotal/OrderTotalPackage.jsx
import React, { useState } from "react";
import styles from "../../MenuSelectionFeatures/OrderTotal/OrderTotal.module.css";

const OrderTotalPackage = ({
  packageCount = 0,
  totalDays = 0, // новый пропс
  discountAmount = 0,
  totalPrice = 0,
  currentStep = 0,
  onNextStep,
  onPrevStep,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleProceed = () => {
    if (!termsAccepted || isProcessing) return;
    setIsProcessing(true);
    onNextStep();
  };

  const getPackageDeclension = (count) => {
    const lastDigit = count % 10;
    const lastTwo = count % 100;
    if (lastDigit === 1 && lastTwo !== 11) return "pakiet";
    if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwo))
      return "pakiety";
    return "pakietów";
  };

  return (
    <div className={styles.orderTotal}>
      {/* Количество пакетов */}
      <div className={styles.totalItem}>
        <b>Liczba pakietów:</b>
        <span>
          {packageCount} {getPackageDeclension(packageCount)}
        </span>
      </div>

      {/* Вместо «Razem bez zniżki» теперь «Ilość dni» */}
      <div className={styles.totalItem}>
        <b>Ilość dni:</b>
        <span>{totalDays}</span>
      </div>

      {/* Скидка, если есть */}
      {discountAmount > 0 && (
        <div className={styles.totalItem}>
          <b>Rabat:</b>
          <span>-{discountAmount.toFixed(2)} zł</span>
        </div>
      )}

      {/* Общая сумма */}
      <div className={styles.totalItem}>
        <b>Razem do zapłaty:</b>
        <span className={styles.totalPrice}>{totalPrice.toFixed(2)} zł</span>
      </div>

      {/* Чекбокс */}
      <label className={styles.termsCheckbox}>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <span>Akceptuję regulamin</span>
      </label>

      {/* Кнопки по шагам */}
      {currentStep === 0 && (
        <button
          className={`${styles.nextButton} ${
            !termsAccepted ? styles.disabled : ""
          }`}
          onClick={onNextStep}
          disabled={!termsAccepted}
        >
          Podaj adres dostawy
        </button>
      )}
      {currentStep === 1 && (
        <button
          className={`${styles.nextButton} ${
            !termsAccepted ? styles.disabled : ""
          }`}
          onClick={onNextStep}
          disabled={!termsAccepted}
        >
          Podsumowania zamówienia
        </button>
      )}
      {currentStep === 2 && (
        <button
          className={`${styles.payButton} ${
            !termsAccepted || isProcessing ? styles.disabled : ""
          }`}
          onClick={handleProceed}
          disabled={!termsAccepted || isProcessing}
        >
          Przejdź do płatności
        </button>
      )}

      {/* Кнопка «Назад» */}
      {typeof onPrevStep === "function" && currentStep > 0 && (
        <button className={styles.prevButton} onClick={onPrevStep}>
          Wstecz
        </button>
      )}
    </div>
  );
};

export default OrderTotalPackage;
