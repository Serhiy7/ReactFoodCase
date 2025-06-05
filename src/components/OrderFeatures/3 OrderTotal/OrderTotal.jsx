// src/components/OrderFeatures/OrderTotal/OrderTotal.jsx
import React, { useState } from "react";
import styles from "../../MenuSelectionFeatures/OrderTotal/OrderTotal.module.css";
const OrderTotal = ({
  packageCount = 0,
  totalWithoutDiscount = 0,
  discountAmount = 0,
  totalPrice = 0,
  onProceedToCheckout,
}) => {
  const [termsAccepted, setTermsAccepted] = useState(false);

  const getPackageDeclension = (count) => {
    const lastDigit = count % 10;
    const lastTwoDigits = count % 100;
    if (lastDigit === 1 && lastTwoDigits !== 11) return "pakiet";
    if (
      [2, 3, 4].includes(lastDigit) &&
      ![12, 13, 14].includes(lastTwoDigits)
    ) {
      return "pakiety";
    }
    return "pakietów";
  };

  return (
    <div className="pay-total">
      <div className="pay-total__item packgs">
        <b>Liczba pakietów:</b>
        <span>
          {packageCount} {getPackageDeclension(packageCount)}
        </span>
      </div>

      <div className="pay-total__item total">
        <b>Całkowity:</b>
        <span>{totalWithoutDiscount.toFixed(2)} zł</span>
      </div>

      <div className="pay-total__item discount">
        <b>Rabat:</b>
        <span style={{ color: "red", fontWeight: "bold" }}>
          -{discountAmount.toFixed(2)} zł
        </span>
      </div>

      <div className="pay-total__item sum">
        <b>Razem do zapłaty:</b>
        <span style={{ color: "#006A23", fontWeight: "bold" }}>
          {totalPrice.toFixed(2)} zł
        </span>
      </div>

      <label htmlFor="accept" className="accept-terms">
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

      <button
        className={`btn pay-total__send ${!termsAccepted ? "disabled" : ""}`}
        disabled={!termsAccepted}
        onClick={onProceedToCheckout}
      >
        Przejdź do płatności
      </button>
    </div>
  );
};

export default OrderTotal;
