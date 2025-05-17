import React from "react";
import styles from "./SelectField.module.css";

/**
 * SelectField — компонент селекта с кастомным стилем и управлением
 * @param {Object} props
 * @param {string} props.label - надпись для селекта
 * @param {string} props.name - имя поля формы
 * @param {string} props.value - выбранное значение
 * @param {function} props.onChange - функция обновления значения
 * @param {Array<{value:string, label:string}>} props.options - варианты выбора
 */
const SelectField = ({ label, name, value, onChange, options }) => {
  const handleChange = (e) => onChange(name, e.target.value);

  return (
    <div className={styles.selectField}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={styles.select}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
