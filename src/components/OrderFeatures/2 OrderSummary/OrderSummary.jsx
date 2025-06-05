// src/components/MenuSelectionFeatures/OrderSummary/OrderSummary.jsx
import React from "react";
import styles from "./OrderSummary.module.css";

const OrderSummary = ({ order, onBack }) => {
  return (
    <div className={styles.orderSummary}>
      {/* Заголовок «Podsumowanie zamówienia» */}
      <h2>Podsumowanie zamówienia</h2>

      {/* Секция «Informacje o zamówieniu» */}
      <div className={styles.summarySection}>
        <h3>Informacje o zamówieniu</h3>
        <div>
          {order.packages.map((pkg, pkgIndex) => {
            if (!pkg.date) return null;

            const mealsThisDate = [];
            if (pkg.sniad)
              mealsThisDate.push({ category: "Śniadanie", ...pkg.sniad });
            if (pkg.obiad)
              mealsThisDate.push({ category: "Obiad", ...pkg.obiad });
            if (pkg.kolacja)
              mealsThisDate.push({ category: "Kolacja", ...pkg.kolacja });

            if (mealsThisDate.length === 0) return null;

            const dayTotal = mealsThisDate
              .reduce((sum, m) => sum + m.price, 0)
              .toFixed(2);

            return (
              <div key={pkgIndex} className={styles.dateBlock}>
                <p className={styles.dateHeader}>
                  <strong>Data: {pkg.date}</strong>
                </p>
                <div className={styles.mealsList}>
                  {mealsThisDate.map((meal, idx) => (
                    <div key={idx} className={styles.mealSummary}>
                      <span>
                        {meal.category}: {meal.name}
                      </span>
                      <span>
                        {meal.weight} g — {meal.price} zł
                      </span>
                    </div>
                  ))}
                </div>
                <p>
                  <strong>Razem za dzień: {dayTotal} zł</strong>
                </p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>

      {/* Секция «Dane dostawy» */}
      <div className={styles.summarySection}>
        <h3>Dane dostawy</h3>
        <div className={styles.deliveryDetails}>
          <div>
            <strong>Adres:</strong> {order.delivery.street}{" "}
            {order.delivery.house_number}
          </div>
          <div>
            <strong>Kontakt:</strong> {order.delivery.fullname},{" "}
            {order.delivery.phone}
          </div>
        </div>
      </div>

      {/* Итоговая строка «Razem do zapłaty» */}
      <div className={styles.summaryTotal}>
        <strong>Razem do zapłaty:</strong> {order.total.toFixed(2)} zł
      </div>

      {/* Кнопка «Edytuj dane» */}
      <button className={styles.backButton} onClick={onBack}>
        Edytuj dane
      </button>
    </div>
  );
};

export default OrderSummary;
