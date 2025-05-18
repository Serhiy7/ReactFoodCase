import React, { useState } from 'react';
import styles from './MenuSelectionWidget.module.css';
import MealCategorySection from '../MealCategorySection/MealCategorySection';
import DatePickerModal from '../DatePickerModal/DatePickerModal';

const MenuSelectionWidget = ({ onSelectionChange }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMeals, setSelectedMeals] = useState({
    sniad: [],
    obiad: [],
    kolacja: []
  });

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setIsModalOpen(false);
  };

  const handleMealSelect = (category, meal) => {
    const updatedMeals = {
      ...selectedMeals,
      [category]: [...selectedMeals[category], meal]
    };
    setSelectedMeals(updatedMeals);
    onSelectionChange(updatedMeals);
  };

  return (
    <div className={styles.widget}>
      <div className={styles.dateSelection}>
        <button 
          className={styles.dateButton}
          onClick={() => setIsModalOpen(true)}
        >
          {selectedDate || 'Wybierz datę dostawy'}
        </button>
      </div>
      
      {selectedDate && (
        <>
          <MealCategorySection 
            category="sniad"
            title="Śniadania"
            onSelect={handleMealSelect}
          />
          
          <MealCategorySection 
            category="obiad"
            title="Obiad"
            onSelect={handleMealSelect}
          />
          
          <MealCategorySection 
            category="kolacja"
            title="Kolacja"
            onSelect={handleMealSelect}
          />
        </>
      )}
      
      <DatePickerModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onDateSelect={handleDateSelect}
      />
    </div>
  );
};

export default MenuSelectionWidget;