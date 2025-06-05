// src/components/MenuSelectionFeatures/OrderTotal/OrderTotal.jsx
import React, { useState } from "react";
import styles from "./OrderTotal.module.css";

const OrderTotal = ({ order = {}, currentStep, onNextStep, onPrevStep }) => {
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  // Если order.selectedMeals нет — по умолчанию пустой массив
  const meals = Array.isArray(order.selectedMeals) ? order.selectedMeals : [];

  // Сумма всех цен (0, если нет ни одного блюда)
  const calculateTotal = () =>
    meals.reduce((sum, meal) => sum + (meal.price || 0), 0);

  // Количество выбранных дат (если нет, то 0)
  const datesCount = Array.isArray(order.selectedDates)
    ? order.selectedDates.length
    : 0;

  return (
    <div className={styles.orderTotal}>
      <div className={styles.totalItem}>
        <b>Wybrane daty:</b>
        {/* Если datesCount === 0, можно вывести “0” или “—” */}
        <span>{datesCount}</span>
      </div>

      <div className={styles.totalItem}>
        <b>Liczba dań:</b>
        <span>{meals.length}</span>
      </div>

      <div className={styles.totalItem}>
        <b>Razem do zapłaty:</b>
        <span className={styles.totalPrice}>
          {calculateTotal().toFixed(2)} zł
        </span>
      </div>

      <label htmlFor="accept" className={styles.termsCheckbox}>
        <input
          type="checkbox"
          id="accept"
          checked={termsAccepted}
          onChange={(e) => setTermsAccepted(e.target.checked)}
        />
        <span>
          Zapoznałem się z zasadami strony i{" "}
          <a href="/regulamin/" target="_blank" rel="noopener noreferrer">
            Regulamin
          </a>
          .
        </span>
      </label>

      {currentStep < 3 && (
        <button
          className={`${styles.nextButton} ${
            !termsAccepted ? styles.disabled : ""
          }`}
          onClick={onNextStep}
          disabled={!termsAccepted || isProcessing}
        >
          {currentStep === 1
            ? "Podaj adres dostawy"
            : "Podsumowanie zamówienia"}
        </button>
      )}

      {currentStep > 1 && (
        <button
          className={styles.backButton}
          onClick={onPrevStep}
          disabled={isProcessing}
        >
          {currentStep === 2 ? "Zmień kolejność" : "Edytuj dane"}
        </button>
      )}

      {currentStep === 3 && (
        <button
          id="pay-button"
          className={`${styles.payButton} ${
            isProcessing ? styles.disabled : ""
          }`}
          onClick={() => {
            if (termsAccepted) onNextStep();
            setIsProcessing(true);
          }}
          disabled={!termsAccepted || isProcessing}
        >
          {isProcessing ? "Przetwarzanie..." : "Płatność"}
        </button>
      )}
    </div>
  );
};

export default OrderTotal;
