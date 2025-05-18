import React, { useState } from 'react';
import styles from './MealCategorySection.module.css';
import MealItem from '../MealItem/MealItem';
import WeightSelector from '../WeightSelector/WeightSelector';

const MealCategorySection = ({ category, title, onSelect }) => {
  const [selectedWeight, setSelectedWeight] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null);
  
  // Mock data - replace with actual data from props or API
  const mealOptions = [
    { id: 1, name: 'Jajecznica', description: 'Jajka na bekonie', price: 15 },
    { id: 2, name: 'Owsianka', description: 'Płatki owsiane z owocami', price: 12 }
  ];
  
  const weightOptions = [
    { weight: '200g', price: 15 },
    { weight: '300g', price: 20 }
  ];

  const handleWeightSelect = (weight) => {
    setSelectedWeight(weight);
    if (selectedMeal) {
      onSelect(category, {
        ...selectedMeal,
        weight: weight.weight,
        price: weight.price
      });
    }
  };

  const handleMealSelect = (meal) => {
    setSelectedMeal(meal);
    if (selectedWeight) {
      onSelect(category, {
        ...meal,
        weight: selectedWeight.weight,
        price: selectedWeight.price
      });
    }
  };

  return (
    <section className={styles.categorySection} data-category={category}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      
      <WeightSelector 
        options={weightOptions}
        onSelect={handleWeightSelect}
        selected={selectedWeight}
      />
      
      <div className={styles.mealGrid}>
        {mealOptions.map(meal => (
          <MealItem
            key={meal.id}
            meal={meal}
            isSelected={selectedMeal?.id === meal.id}
            onSelect={() => handleMealSelect(meal)}
          />
        ))}
      </div>
    </section>
  );
};

export default MealCategorySection;