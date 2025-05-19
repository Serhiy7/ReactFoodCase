import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MobileMenu.module.css";
import { MAIN_LINKS, SECONDARY_LINKS } from "../../constants/index";

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.mobileMenu}>
      <div className={styles.mobileMenuContent}>
        <nav>
          <ul className={styles.navList}>
            {[...MAIN_LINKS, ...SECONDARY_LINKS].map(({ to, label }) => (
              <li key={to} className={styles.navItem}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive
                      ? `${styles.navLink} ${styles.active}`
                      : styles.navLink
                  }
                  onClick={onClose}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default MobileMenu;
