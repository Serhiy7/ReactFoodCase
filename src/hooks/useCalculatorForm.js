import { useState } from "react";
import { calculateBMR, getRecommendedPackage } from "../../utils/calculations";

export const useCalculatorForm = () => {
  const [formData, setFormData] = useState({
    /* ... */
  });
  const [results, setResults] = useState({
    /* ... */
  });

  const handleChange = (e) => {
    /* ... */
  };

  const calculate = () => {
    const bmrValue = calculateBMR(
      formData.age,
      formData.gender,
      formData.weight,
      formData.height
    );
    const caloriesValue = bmrValue * parseFloat(formData.activity);
    setResults({
      bmr: bmrValue,
      calories: caloriesValue,
      recomend: getRecommendedPackage(caloriesValue),
    });
  };

  return { formData, handleChange, calculate, results };
};
