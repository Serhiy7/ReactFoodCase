import React, { useState } from "react";
import styles from "./CalorieCalculator.module.css";

import CalculatorModal from "./CalculatorModal/CalculatorModal";
import InputRange from "./InputRange";
import SelectField from "./SelectField";
import useCalorieForm from "./useCalorieForm";

const CalorieCalculator = () => {
  const { formData, setField } = useCalorieForm();
  const [modalOpen, setModalOpen] = useState(false);

  const handleCalculate = () => {
    setModalOpen(true);
  };

  return (
    <div className={styles.calc}>
      <h2 className={styles.calc__title}>Kalkulator kalorii</h2>

      <InputRange
        label="Wiek (lata):"
        name="age"
        value={formData.age}
        onChange={setField}
        min={10}
        max={80}
      />

      <SelectField
        label="Płeć:"
        name="gender"
        value={formData.gender}
        onChange={setField}
        options={[
          { value: "male", label: "Mężczyzna" },
          { value: "female", label: "Kobieta" },
        ]}
      />

      <InputRange
        label="Waga (kg):"
        name="weight"
        value={formData.weight}
        onChange={setField}
        min={10}
        max={200}
      />

      <InputRange
        label="Wysokość (cm):"
        name="height"
        value={formData.height}
        onChange={setField}
        min={100}
        max={300}
      />

      <SelectField
        label="Poziom aktywności:"
        name="activity"
        value={formData.activity}
        onChange={setField}
        options={[
          { value: "1.2", label: "Minimum" },
          { value: "1.375", label: "Lekka aktywność" },
          { value: "1.55", label: "Umiarkowana aktywność" },
          { value: "1.725", label: "Wysoka aktywność" },
          { value: "1.9", label: "Bardzo duża aktywność" },
        ]}
      />

      <button className={styles.calc__btn} onClick={handleCalculate}>
        Obliczać
      </button>

      {modalOpen && <CalculatorModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default CalorieCalculator;
