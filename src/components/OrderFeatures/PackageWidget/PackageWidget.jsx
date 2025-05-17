import React from "react";
import { useModal } from "../ModalManager/useModal";
import styles from "./PackageWidget.module.css";

const PackageWidget = ({ package: pkg, onDatesSelected }) => {
  const { openModal } = useModal();

  const handleSelectDates = () => {
    openModal("date-picker", {
      packageId: pkg.id,
      onSelectDates: (dates) => {
        onDatesSelected(pkg.id, dates); // Передаём выбранные даты в родительский компонент
      },
    });
  };

  return (
    <div className={styles.packageWidget}>
      <div className={styles.payItemPhoto}>
        <img src={pkg.image} alt={`${pkg.name} kalorii`} />
      </div>
      <div className={styles.payItemTitle}>{pkg.name} kalorii</div>
      <div className={`${styles.price} ${styles.payItemPrice}`}>
        {pkg.price} zł
      </div>
      <button
        onClick={handleSelectDates}
        className={`${styles.btn} ${styles.payItemBtn}`}
      >
        Wybierz daty dostawy
      </button>
    </div>
  );
};

export default PackageWidget;
