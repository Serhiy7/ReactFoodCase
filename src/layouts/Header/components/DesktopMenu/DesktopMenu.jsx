import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./DesktopMenu.module.css";
import { MAIN_LINKS, SECONDARY_LINKS } from "../../constants/index";

const DesktopMenu = () => {
  return (
    <div className={styles.desktopMenu}>
      <nav className={styles.mainNav}>
        <ul className={styles.navList}>
          {MAIN_LINKS.map(({ to, label }) => (
            <li key={to} className={styles.navItem}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav className={styles.secondaryNav}>
        <ul className={styles.navList}>
          {SECONDARY_LINKS.map(({ to, label }) => (
            <li key={to} className={styles.navItem}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  isActive
                    ? `${styles.navLink} ${styles.active}`
                    : styles.navLink
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
export default DesktopMenu;
