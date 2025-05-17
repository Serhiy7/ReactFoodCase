import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavMenu.module.css";

/**
 * Основное меню навигации (десктоп + мобильное)
 * @param {Object} props
 * @param {boolean} props.isMobileMenuOpen - состояние мобильного меню
 * @param {() => void} props.onLinkClick - колбек по клику на ссылку
 * @returns {JSX.Element}
 */
export const NavMenu = ({ isMobileMenuOpen, onLinkClick }) => {
  const links = [
    { to: "/", label: "Главная" },
    { to: "/menu", label: "Меню" },
    { to: "/pricing", label: "Цены" },
    { to: "/contacts", label: "Контакты" },
  ];

  return (
    <nav
      className={`${styles.navMenu} ${isMobileMenuOpen ? styles.open : ""}`}
      aria-label="Главное меню"
    >
      <ul className={styles.navMenu}>
        {links.map(({ to, label }) => (
          <li key={to} className={styles.navMenuItem}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive
                  ? `${styles.navMenuLink} ${styles.active}`
                  : styles.navMenuLink
              }
              onClick={onLinkClick}
              tabIndex={0}
              aria-current={({ isActive }) => (isActive ? "page" : undefined)}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
