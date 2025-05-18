import React from 'react';
import styles from './MealItem.module.css';

const MealItem = ({ meal, isSelected, onSelect }) => {
  return (
    <div 
      className={`${styles.mealItem} ${isSelected ? styles.selected : ''}`}
      onClick={onSelect}
    >
      <div className={styles.mealImage}>
        <img src={meal.image || '/assets/img/placeholder.jpg'} alt={meal.name} />
      </div>
      <div className={styles.mealInfo}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <div className={styles.mealPrice}>{meal.price} zł</div>
      </div>
    </div>
  );
};

export default MealItem;