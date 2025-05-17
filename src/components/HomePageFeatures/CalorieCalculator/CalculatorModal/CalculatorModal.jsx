import React from "react";
import styles from "./CalculatorModal.module.css";

const CalculatorModal = ({ onClose }) => {
  return (
    <div className={`${styles.calcModal} ${styles.show}`}>
      <div className={styles.calcModal__inner}>
        <div className={styles.calcModal__close} onClick={onClose}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 23.5L23.5 1M1 1L23.5 23.5"
              stroke="#232324"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className={styles.calcModal__row}>
          <div className={styles.calcModal__title}>Twoje wyniki:</div>
          <div className={styles.calcModal__result}>
            Podstawowa przemiana materii (BMR):{" "}
            <span className={styles.bmr}>2000</span> kcal/dzień
          </div>
          <div className={styles.calcModal__result}>
            Zapotrzebowanie kaloryczne:{" "}
            <span className={styles.calories}>2500</span> kcal/dzień
          </div>
        </div>
        <div className={styles.calcModal__row}>
          <div className={styles.calcModal__title}>Polecamy Cię:</div>
          <div className={styles.calcModal__result}>
            Pakiet <span className={styles.recomend}>2200</span> kcal
          </div>
        </div>
        <a href="/index2/" className={styles.calcModal__btn}>
          Zamów pakiet <span className={styles.btnRecomend}>2200</span> kalorii
        </a>
      </div>
    </div>
  );
};

export default CalculatorModal;
