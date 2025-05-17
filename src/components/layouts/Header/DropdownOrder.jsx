import React, { useState, useRef, useEffect } from "react";
import styles from "./DropdownOrder.module.css";

/**
 * Хук для управления открытием/закрытием выпадающего меню
 * @param {React.RefObject} ref - реф на элемент меню
 * @returns {[boolean, () => void]} [isOpen, toggle]
 */
function useDropdownMenu(ref) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    /** Обработчик клика вне компонента */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  const toggle = () => setIsOpen((prev) => !prev);

  return [isOpen, toggle];
}

/**
 * Компонент кнопки "Заказать" с выпадающим меню
 * @component
 * @example
 * return <DropdownOrder />
 */
export const DropdownOrder = () => {
  const ref = useRef(null);
  const [isOpen, toggle] = useDropdownMenu(ref);

  return (
    <div className={styles.dropdownOrder} ref={ref}>
      <button
        type="button"
        className={styles.dropdownOrder__button}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={toggle}
        aria-label="Открыть меню заказа"
      >
        Заказать
      </button>

      <ul
        className={`${styles.dropdownOrder__menu} ${
          isOpen ? styles.dropdownOrder__menu_open : ""
        }`}
        role="menu"
        aria-label="Меню заказа"
      >
        <li className={styles.dropdownOrder__menuItem} role="none">
          <a
            href="/order/meal-plan"
            className={styles.dropdownOrder__menuLink}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
          >
            Калькулятор калорий
          </a>
        </li>
        <li className={styles.dropdownOrder__menuItem} role="none">
          <a
            href="/order/custom"
            className={styles.dropdownOrder__menuLink}
            role="menuitem"
            tabIndex={isOpen ? 0 : -1}
          >
            Индивидуальный заказ
          </a>
        </li>
      </ul>
    </div>
  );
};
