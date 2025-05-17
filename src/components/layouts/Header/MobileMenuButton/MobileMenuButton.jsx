import React from 'react';
import styles from './MobileMenuButton.module.css';

/**
 * Кнопка открытия/закрытия мобильного меню (бургер)
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onToggle
 */
export const MobileMenuButton = ({ isOpen, onToggle }) => (
  <button
    className={styles.burger}
    aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    aria-expanded={isOpen}
    onClick={onToggle}
  >
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </button>
);
