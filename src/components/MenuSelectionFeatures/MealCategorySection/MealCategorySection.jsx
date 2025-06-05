// src/components/MenuSelectionFeatures/MealCategorySection/MealCategorySection.jsx
import React, { useState, useEffect } from "react";
import MealItem from "../MealItem/MealItem";
import WeightSelector from "../WeightSelector/WeightSelector";
import styles from "./MealCategorySection.module.css";

const MealCategorySection = ({
  category,
  title,
  onSelect,
  initialSelection,
}) => {
  const weightOptions = [
    { weight: 150, price: 25 },
    { weight: 200, price: 30 },
    { weight: 250, price: 35 },
  ];

  const allMeals = [
    {
      id: 1,
      name: "Jajecznica",
      description: "Jajka na bekonie",
      priceBase: 15,
    },
    {
      id: 2,
      name: "Owsianka",
      description: "Płatki owsiane z owocami",
      priceBase: 12,
    },
    // … добавьте другие блюда по необходимости
  ];

  const [selectedWeight, setSelectedWeight] = useState(
    initialSelection?.weight
      ? weightOptions.find((w) => w.weight === initialSelection.weight)
      : null
  );
  const [selectedMeal, setSelectedMeal] = useState(
    initialSelection?.id
      ? allMeals.find((m) => m.id === initialSelection.id)
      : null
  );

  useEffect(() => {
    if (initialSelection) {
      const w =
        weightOptions.find((w) => w.weight === initialSelection.weight) || null;
      const m = allMeals.find((m) => m.id === initialSelection.id) || null;
      setSelectedWeight(w);
      setSelectedMeal(m);
    } else {
      setSelectedWeight(null);
      setSelectedMeal(null);
    }
  }, [initialSelection]);

  const handleWeightClick = (option) => {
    if (selectedWeight?.weight === option.weight) {
      setSelectedWeight(null);
      if (selectedMeal) {
        setSelectedMeal(null);
        onSelect(null);
      }
    } else {
      setSelectedWeight(option);
      if (selectedMeal) {
        setSelectedMeal(null);
        onSelect(null);
      }
    }
  };

  const handleMealClick = (meal) => {
    if (!selectedWeight) return;
    if (selectedMeal?.id === meal.id) {
      setSelectedMeal(null);
      setSelectedWeight(null);
      onSelect(null);
    } else {
      setSelectedMeal(meal);
      const payload = {
        id: meal.id,
        name: meal.name,
        description: meal.description,
        weight: selectedWeight.weight,
        price: selectedWeight.price,
      };
      onSelect(payload);
    }
  };

  return (
    <section className={styles.categorySection} data-category={category}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {/* 1. Блок WeightSelector */}
      <WeightSelector
        options={weightOptions}
        onSelect={handleWeightClick}
        selected={selectedWeight}
      />

      {/* 2. Сетка MealItem */}
      <div className={styles.mealGrid}>
        {allMeals.map((meal) => {
          const isThisSelected = selectedMeal?.id === meal.id;
          const disabled = !selectedWeight;
          return (
            <MealItem
              key={meal.id}
              meal={{ ...meal, price: meal.priceBase }}
              isSelected={isThisSelected}
              isDisabled={disabled}
              onSelect={() => handleMealClick(meal)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MealCategorySection;
