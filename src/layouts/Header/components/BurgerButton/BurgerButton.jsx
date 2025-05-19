import React from "react";
import styles from "./BurgerButton.module.css";

const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
    >
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
      <span className={styles.burgerLine}></span>
    </button>
  );
};

export default BurgerButton;
