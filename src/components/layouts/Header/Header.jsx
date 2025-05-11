import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { HEADER_LINKS } from "./constants";
// import MenuIcon from '../../assets/icons/menu.svg';
import { useHeader } from "./useHeader";

const Header = () => {
  const { dropdownOpen, toggleDropdown, handleScrollClick } = useHeader();
  const location = useLocation();
  const isHomePage =
    location.pathname === "/" || location.pathname.endsWith("/index.php");

  return (
    <>
      <div className={styles.navbar}>
        Dla standardowego menu: Zamów na 20 dni lub więcej i uzyskaj rabat...
      </div>

      <header
        className={styles.header}
        itemScope
        itemType="http://schema.org/WPHeader"
      >
        <div className={styles.container}>
          <Link to="/index.php" className={styles.logo}>
            <img src="/assets/img/logo.png" alt="FoodCase Logo" />
          </Link>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              {HEADER_LINKS.map((link) => (
                <li key={link.path} className={styles.navItem}>
                  {link.isAnchor && isHomePage ? (
                    <a
                      href={link.path}
                      className={styles.navLink}
                      onClick={(e) => handleScrollClick(link.path, e)}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link to={link.path} className={styles.navLink}>
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className={styles.dropdown}>
            <button className={styles.dropdownButton} onClick={toggleDropdown}>
              Złóż zamówienie
            </button>
            {dropdownOpen && (
              <div className={styles.dropdownContent}>
                <Link to="/index2/" className={styles.dropdownLink}>
                  Standardowe menu
                </Link>
                <Link to="/menu_do_wyboru/" className={styles.dropdownLink}>
                  Menu do wyboru
                </Link>
              </div>
            )}
          </div>

          <button className={styles.mobileButton}>
            <MenuIcon className={styles.menuIcon} />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
