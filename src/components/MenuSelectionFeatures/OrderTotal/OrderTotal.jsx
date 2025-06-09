import React, { useState } from "react";
import styles from "./OrderTotal.module.css";

export default function OrderTotal(props) {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Определяем режим: пакетный или меню-блюд
  const isPackageMode = typeof props.packageCount === "number";

  // === Пакетный режим ===
  if (isPackageMode) {
    const {
      packageCount,
      totalWithoutDiscount,
      discountAmount,
      totalPrice,
      onProceedToCheckout,
    } = props;

    const handleClick = () => {
      if (!termsAccepted || isProcessing) return;
      setIsProcessing(true);
      onProceedToCheckout();
    };

    return (
      <div className={styles.orderTotal}>
        <div className={styles.totalItem}>
          <b>Liczba pakietów:</b> <span>{packageCount}</span>
        </div>
        <div className={styles.totalItem}>
          <b>Razem bez zniżki:</b>{" "}
          <span>{totalWithoutDiscount.toFixed(2)} zł</span>
        </div>
        {discountAmount > 0 && (
          <div className={styles.totalItem}>
            <b>Rabatt:</b> <span>-{discountAmount.toFixed(2)} zł</span>
          </div>
        )}
        <div className={styles.totalItem}>
          <b>Do zapłaty:</b> <span>{totalPrice.toFixed(2)} zł</span>
        </div>

        <label className={styles.termsCheckbox}>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
          />
          <span>Akceptuję regulamin</span>
        </label>

        <button
          className={`${styles.nextButton} ${
            !termsAccepted || isProcessing ? styles.disabled : ""
          }`}
          onClick={handleClick}
          disabled={!termsAccepted || isProcessing}
        >
          Podaj adres dostawy
        </button>
      </div>
    );
  }

  // === Меню-блюд режим ===
  const { order = {}, currentStep, onNextStep, onPrevStep } = props;
  const meals = Array.isArray(order.selectedMeals) ? order.selectedMeals : [];
  const dates = Array.isArray(order.selectedDates) ? order.selectedDates : [];
  const total = meals.reduce((sum, m) => sum + (m.price || 0), 0);

  const handleNext = () => {
    if (!termsAccepted) return;
    onNextStep();
  };
  const handlePay = () => {
    if (!termsAccepted) return;
    setIsProcessing(true);
    onNextStep();
  };

  return (
    <div className={styles.orderTotal}>
      <div className={styles.totalItem}>
        <b>Wybrane daty:</b> <span>{dates.length}</span>
      </div>
      <div className={styles.totalItem}>
        <b>Liczba dań:</b> <span>{meals.length}</span>
      </div>
      <div className={styles.totalItem}>
        <b>Razem do zapłaty:</b>{" "}
        <span className={styles.totalPrice}>{total.toFixed(2)} zł</span>
      </div>

      <label className={styles.termsCheckbox}>
        <input
          type="checkbox"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <span>Zapoznałem się z regulaminem</span>
      </label>

      {currentStep === 1 && (
        <button
          className={`${styles.nextButton} ${
            !termsAccepted ? styles.disabled : ""
          }`}
          onClick={handleNext}
          disabled={!termsAccepted}
        >
          Podaj adres dostawy
        </button>
      )}

      {currentStep === 2 && (
        <button
          className={`${styles.nextButton} ${
            !termsAccepted ? styles.disabled : ""
          }`}
          onClick={handleNext}
          disabled={!termsAccepted}
        >
          Podsumowania zamówienia
        </button>
      )}

      {currentStep === 3 && (
        <button
          className={`${styles.payButton} ${
            isProcessing ? styles.disabled : ""
          }`}
          onClick={handlePay}
          disabled={!termsAccepted || isProcessing}
        >
          Płatność
        </button>
      )}

      {typeof onPrevStep === "function" && currentStep > 0 && (
        <button className={styles.prevButton} onClick={onPrevStep}>
          Wstecz
        </button>
      )}
    </div>
  );
}
