import React, { useState } from "react";
import styles from "./CalorieCalculator.module.css";
import CalculatorModal from "./CalculatorModal/CalculatorModal";

const CalorieCalculator = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCalculate = () => {
    setModalOpen(true);
  };

  return (
    <div className={styles.calc}>
      <h2 className={styles.calc__title}>Kalkulator kalorii</h2>
      <div className={styles.calc__grid}>
        <div className={styles.calc__field}>
          <div className={styles.calc__label}>Wiek (lata):</div>
          <div className={styles.calc__range}>
            <input type="tel" min="10" max="80" value="10" name="age" />
            <input type="range" min="10" max="80" />
          </div>
        </div>
        <div className={styles.calc__field}>
          <div className={styles.calc__label}>Płeć:</div>
          <div className={styles.calc__select}>
            <select name="gender">
              <option value="male" selected>
                Mężczyzna
              </option>
              <option value="female">Kobieta</option>
            </select>
          </div>
        </div>
        <div className={styles.calc__field}>
          <div className={styles.calc__label}>Waga (kg):</div>
          <div className={styles.calc__range}>
            <input type="tel" min="10" max="200" value="75" name="weight" />
            <input type="range" min="10" max="200" />
          </div>
        </div>
        <div className={styles.calc__field}>
          <div className={styles.calc__label}>Wysokość (cm):</div>
          <div className={styles.calc__range}>
            <input type="tel" min="100" max="300" value="180" name="height" />
            <input type="range" min="100" max="300" />
          </div>
        </div>
        <div className={styles.calc__field}>
          <div className={styles.calc__label}>Poziom aktywności:</div>
          <div className={styles.calc__select}>
            <select name="activity">
              <option value="1.2" selected>
                Minimum
              </option>
              <option value="1.375">Lekka aktywność</option>
              <option value="1.55">Umiarkowana aktywność</option>
              <option value="1.725">Wysoka aktywność</option>
              <option value="1.9">Bardzo duża aktywność</option>
            </select>
          </div>
        </div>
      </div>
      <button className={styles.calc__btn} onClick={handleCalculate}>
        Obliczać
      </button>
      {modalOpen && <CalculatorModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CalorieCalculator;
