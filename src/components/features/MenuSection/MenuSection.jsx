import React from 'react';
import PropTypes from 'prop-types';
import styles from './MenuSection.module.css';
import { MENU_TABS, MEAL_TYPES } from './constants';
import { useMenuSection } from './useMenuSection';

const MenuSection = () => {
  const { activeTab, activeMealType, handleTabChange, handleMealTypeChange } = useMenuSection();

  return (
    <section className={styles.section} id="menu">
      <div className={styles.container}>
        <h2 className={styles.title}>Zobaczyć Menu</h2>
        
        <div className={styles.tabButtons}>
          {MENU_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ''}`}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {activeTab === 'choice' && (
          <div className={styles.mealTypeButtons}>
            {MEAL_TYPES.map((meal) => (
              <button
                key={meal.id}
                className={`${styles.mealButton} ${activeMealType === meal.id ? styles.active : ''}`}
                onClick={() => handleMealTypeChange(meal.id)}
              >
                {meal.label}
              </button>
            ))}
          </div>
        )}
        
        <div id="menuContainer" className={styles.menuContainer}>
          {/* Динамическое содержимое меню */}
        </div>
      </div>
    </section>
  );
};

MenuSection.propTypes = {
  // Опционально: добавьте пропсы, если компонент принимает данные извне
};

export default MenuSection;