import React from "react";
import styles from "./InputRange.module.css"; // можно сделать свой css

/**
 * Компонент InputRange для управления числовым полем через number и range
 * @param {object} props
 * @param {string} props.label - название поля
 * @param {string} props.name - имя поля
 * @param {number} props.value - текущее значение
 * @param {function} props.onChange - обработчик изменения
 * @param {number} props.min - минимальное значение
 * @param {number} props.max - максимальное значение
 */
const InputRange = ({ label, name, value, onChange, min, max }) => {
  const handleChange = (e) => {
    let val = e.target.value;
    // преобразуем к числу, если не пусто
    val = val === "" ? "" : Number(val);
    onChange(name, val);
  };

  return (
    <div className={styles.inputRange}>
      <label className={styles.label}>{label}</label>
      <div className={styles.controls}>
        <input
          type="number"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={handleChange}
          className={styles.numberInput}
        />
        <input
          type="range"
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={handleChange}
          className={styles.rangeInput}
        />
      </div>
    </div>
  );
};

export default InputRange;
