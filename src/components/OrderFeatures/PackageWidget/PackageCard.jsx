import React from "react";
import styles from "./PackageCard.module.css";

export default function PackageCard({ pkg, selected, onSelect }) {
  return (
    <div
      className={`${styles.packageCard} ${selected ? styles.selected : ""}`}
      onClick={() => onSelect(pkg)}
    >
      <div className={styles.imageContainer}>
        <img
          src={pkg.image}
          alt={`${pkg.name} kalorii`}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.info}>
        <h3 className={styles.name}>{pkg.name} kalorii</h3>
        <div className={styles.price}>{pkg.price.toFixed(2)} zł</div>
      </div>
      <div className={styles.selectButton}>
        {selected ? "Wybrany" : "Wybierać"}
      </div>
    </div>
  );
}
