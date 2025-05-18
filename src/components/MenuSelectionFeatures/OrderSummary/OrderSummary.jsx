import React from 'react';
import styles from './OrderSummary.module.css';

const OrderSummary = ({ order, onBack }) => {
  return (
    <div className={styles.orderSummary}>
      <h2>Podsumowanie zamówienia</h2>
      
      <div className={styles.summarySection}>
        <h3>Wybrane dania</h3>
        {order.selectedMeals.map((meal, index) => (
          <div key={index} className={styles.mealSummary}>
            <div className={styles.mealName}>{meal.name}</div>
            <div className={styles.mealDetails}>
              {meal.weight} - {meal.price} zł
            </div>
          </div>
        ))}
      </div>
      
      <div className={styles.summarySection}>
        <h3>Dane dostawy</h3>
        <div className={styles.deliveryDetails}>
          <div>
            <strong>Adres:</strong> {order.delivery.street} {order.delivery.house_number}
          </div>
          <div>
            <strong>Kontakt:</strong> {order.delivery.fullname}, {order.delivery.phone}
          </div>
        </div>
      </div>
      
      <div className={styles.summaryTotal}>
        <strong>Razem do zapłaty:</strong> {order.total.toFixed(2)} zł
      </div>
      
      <button className={styles.backButton} onClick={onBack}>
        Edytuj dane
      </button>
    </div>
  );
};

export default OrderSummary;