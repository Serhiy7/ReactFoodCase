import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import Logo from "./Logo/Logo";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import BurgerButton from "./components/BurgerButton/BurgerButton";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContainer}>
        <Logo className={styles.logo} />

        <DesktopMenu className={styles.desktopMenu} />

        <BurgerButton
          isOpen={isMobileMenuOpen}
          onClick={toggleMobileMenu}
          className={styles.burgerButton}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        />

        <MobileMenu
          isOpen={isMobileMenuOpen}
          onClose={closeMobileMenu}
          className={styles.mobileMenu}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  // Добавьте propTypes если компонент принимает пропсы
};

export default Header;
