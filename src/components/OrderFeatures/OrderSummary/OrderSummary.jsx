import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ selectedPackages = [], deliveryData = {} }) => {
  return (
    <div className={styles.pageGridTab}>
      <button className={`${styles.btn} ${styles.payTotalPrev}`}>
        Еdytować dane
      </button>

      <div className={styles.totalInfo}>
        <div className={styles.totalInfoRow}>
          <h3 className={styles.totalInfoHeading}>Informacje o zamówieniu</h3>
          <div className={styles.totalInfoGrid}>
            {selectedPackages?.map((pkg, index) => (
              <div key={index} className={styles.packageSummary}>
                <div className={styles.packageImage}>
                  <img src={pkg.image} alt={`${pkg.name} kalorii`} />
                </div>
                <div className={styles.packageDetails}>
                  <h4>{pkg.name} kalorii</h4>
                  <p>Ilość dni: {pkg.dates?.length || 0}</p>
                  <p>Cena: {pkg.price} zł/dzień</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.totalInfoRow}>
          <h3 className={styles.totalInfoHeading}>Dane dostawy</h3>
          <div className={styles.totalInfoData}>
            {Object.entries(deliveryData).map(([key, value]) => (
              <div key={key} className={styles.deliveryInfoItem}>
                <strong>{key.replace("_", " ")}:</strong>{" "}
                {value || "Nie podano"}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
