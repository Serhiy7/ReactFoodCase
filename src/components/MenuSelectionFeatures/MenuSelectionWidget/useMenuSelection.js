import { useState, useEffect } from "react";

export const useMenuSelection = () => {
  const [selectedMeals, setSelectedMeals] = useState({
    sniad: [],
    obiad: [],
    kolacja: [],
  });
  const [selectedDate, setSelectedDate] = useState("");
  const [orderData, setOrderData] = useState({
    selectedMeals: [],
    delivery: {},
    total: 0,
    selectedDates: [],
  });

  // Загрузка данных из sessionStorage при монтировании
  useEffect(() => {
    const savedOrder = sessionStorage.getItem("menuOrderData");
    if (savedOrder) {
      setOrderData(JSON.parse(savedOrder));
    }
  }, []);

  // Сохранение данных в sessionStorage при изменении
  useEffect(() => {
    sessionStorage.setItem("menuOrderData", JSON.stringify(orderData));
  }, [orderData]);

  const handleMealSelect = (category, meal) => {
    const updatedMeals = {
      ...selectedMeals,
      [category]: [...selectedMeals[category], meal],
    };
    setSelectedMeals(updatedMeals);

    setOrderData((prev) => ({
      ...prev,
      selectedMeals: Object.values(updatedMeals).flat(),
    }));
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    setOrderData((prev) => ({
      ...prev,
      selectedDates: [...prev.selectedDates, date],
    }));
  };

  const removeMeal = (category, index) => {
    const updatedCategory = [...selectedMeals[category]];
    updatedCategory.splice(index, 1);

    setSelectedMeals({
      ...selectedMeals,
      [category]: updatedCategory,
    });

    setOrderData((prev) => ({
      ...prev,
      selectedMeals: Object.values({
        ...selectedMeals,
        [category]: updatedCategory,
      }).flat(),
    }));
  };

  const updateDeliveryInfo = (deliveryData) => {
    setOrderData((prev) => ({
      ...prev,
      delivery: deliveryData,
    }));
  };

  const calculateTotal = () => {
    return orderData.selectedMeals.reduce((sum, meal) => sum + meal.price, 0);
  };

  return {
    selectedMeals,
    selectedDate,
    orderData,
    handleMealSelect,
    handleDateSelect,
    removeMeal,
    updateDeliveryInfo,
    calculateTotal,
  };
};
