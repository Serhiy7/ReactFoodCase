import { useState } from "react";

/**
 * useCalorieForm - хук для управления состоянием калькулятора калорий
 * @returns {object} { formData, setField, resetForm }
 */
export default function useCalorieForm() {
  const [formData, setFormData] = useState({
    age: 10,
    gender: "male",
    weight: 75,
    height: 180,
    activity: "1.2",
  });

  /**
   * Обработчик обновления поля формы
   * @param {string} field - имя поля
   * @param {string|number} value - значение поля
   */
  const setField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setFormData({
      age: 10,
      gender: "male",
      weight: 75,
      height: 180,
      activity: "1.2",
    });
  };

  return { formData, setField, resetForm };
}
