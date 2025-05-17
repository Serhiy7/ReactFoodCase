import React, { useState } from "react";
import styles from "./OrderTotal.module.css";

const OrderTotal = ({
  packageCount = 0,
  totalWithoutDiscount = 0,
  discountAmount = 0,
  totalPrice = 0,
  onProceedToCheckout,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  return (
    <div className={styles.payTotal}>
      <div className={`${styles.payTotalItem} ${styles.packgs}`}>
        <b>Liczba pakietów:</b>
        <span>
          {packageCount} {getPackageDeclension(packageCount)}
        </span>
      </div>

      <div className={`${styles.payTotalItem} ${styles.total}`}>
        <b>Сałkowity:</b>
        <span>{totalWithoutDiscount.toFixed(2)}zł</span>
      </div>

      <div className={`${styles.payTotalItem} ${styles.discount}`}>
        <b>Rabat:</b>
        <span style={{ color: "red", fontWeight: "bold" }}>
          -{discountAmount.toFixed(2)}zł
        </span>
      </div>

      <div className={`${styles.payTotalItem} ${styles.sum}`}>
        <b>Razem do zapłaty:</b>
        <span style={{ color: "#006A23", fontWeight: "bold" }}>
          {totalPrice.toFixed(2)}zł
        </span>
      </div>

      <label className={styles.acceptTerms}>
        <input
          type="checkbox"
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

      <button
        className={`${styles.btn} ${styles.payTotalSend}`}
        disabled={!termsAccepted}
        onClick={onProceedToCheckout}
      >
        Przejdź do płatności
      </button>
    </div>
  );
};

// Вспомогательная функция для склонения слова "пакет"
function getPackageDeclension(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastDigit === 1 && lastTwoDigits !== 11) return "pakiet";
  if ([2, 3, 4].includes(lastDigit) && ![12, 13, 14].includes(lastTwoDigits)) {
    return "pakiety";
  }
  return "pakietów";
}

export default OrderTotal;
