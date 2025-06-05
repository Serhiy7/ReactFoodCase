// src/components/MenuSelectionFeatures/MealItem/MealItem.jsx
import React from "react";

const MealItem = ({ meal, isSelected, isDisabled, onSelect }) => {
  const handleClick = () => {
    if (isDisabled) return;
    onSelect();
  };

  return (
    <div
      className={`mealItem ${isSelected ? "selected" : ""} ${
        isDisabled ? "disabled" : ""
      }`}
      onClick={handleClick}
    >
      <div className="mealImage">
        <img
          src={meal.image || "/assets/img/placeholder.jpg"}
          alt={meal.name}
        />
      </div>
      <div className="mealInfo">
        <h3 className="mealName">{meal.name}</h3>
        <p className="mealDescription">{meal.description}</p>
        {isSelected && (
          <div className="mealPrice">
            {meal.price} zł ({meal.weight} g)
          </div>
        )}
      </div>
    </div>
  );
};

export default MealItem;
