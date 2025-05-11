import { useState } from "react";
import { calculateBMR, getRecommendedPackage } from "../../../utils/calculations";

export const useCalculatorForm = () => {
  const [formData, setFormData] = useState({
    age: 10,
    gender: "male",
    weight: 75,
    height: 180,
    activity: "1.2",
  });

  const [results, setResults] = useState({
    bmr: 0,
    calories: 0,
    recomend: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: ["age", "weight", "height"].includes(name)
        ? parseInt(value)
        : value,
    }));
  };

  const calculate = () => {
    const bmr = calculateBMR(
      formData.age,
      formData.gender,
      formData.weight,
      formData.height
    );
    const calories = bmr * parseFloat(formData.activity);

    setResults({
      bmr,
      calories,
      recomend: getRecommendedPackage(calories),
    });
  };

  return { formData, handleChange, calculate, results };
};
