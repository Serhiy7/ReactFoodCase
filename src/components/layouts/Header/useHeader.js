//(логика)
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleScrollClick = (hash, e) => {
    if (location.pathname !== '/') return;

    e.preventDefault();
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, null, hash);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownOpen && !e.target.closest(`.${styles.dropdown}`)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [dropdownOpen]);

  return { dropdownOpen, toggleDropdown, handleScrollClick };
};