import React, { useState } from "react";
import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";
import { DropdownOrder } from "./DropdownOrder";
import { MobileMenuButton } from "./MobileMenuButton";

/**
 * Основной Header сайта с адаптивной навигацией
 */
const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <NavMenu
          isMobileMenuOpen={mobileMenuOpen}
          onLinkClick={closeMobileMenu}
        />
        <DropdownOrder />
        <MobileMenuButton isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
      </div>
    </header>
  );
};
export default Header;
