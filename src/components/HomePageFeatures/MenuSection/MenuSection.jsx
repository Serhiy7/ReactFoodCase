import React, { useState, useEffect } from "react";
import styles from "./MenuSection.module.css";

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState("standard");
  const [activeCategory, setActiveCategory] = useState("Sniadanie");
  const [menuData, setMenuData] = useState([]);

  const fetchMenu = async (category) => {
    try {
      const response = await fetch(
        `/admin/fetch_menu.php?category=${encodeURIComponent(category)}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMenuData(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu(activeCategory);
  }, [activeCategory]);

  return (
    <section className={styles.section_menu} id="menu">
      <div className={styles.container}>
        <h2 className={styles.section__title}>Zobaczyć Menu</h2>
        <div className={styles.menu_tabs}>
          <div
            className={`${styles.btn} ${
              activeTab === "standard" ? styles.active : ""
            } ${styles.btn_centre}`}
            onClick={() => setActiveTab("standard")}
          >
            Standardowe menu
          </div>
          <div
            className={`${styles.btn} ${
              activeTab === "choice" ? styles.active : ""
            } ${styles.btn_centre}`}
            onClick={() => setActiveTab("choice")}
          >
            Menu do wyboru
          </div>
        </div>
        {activeTab === "choice" && (
          <div className={styles.wyboru}>
            <div
              className={`${styles.btn} ${styles.btn_wyrobu} ${
                activeCategory === "Sniadanie" ? styles.active : ""
              }`}
              onClick={() => setActiveCategory("Sniadanie")}
            >
              Sniadanie
            </div>
            <div
              className={`${styles.btn} ${styles.btn_wyrobu} ${
                activeCategory === "Obiad" ? styles.active : ""
              }`}
              onClick={() => setActiveCategory("Obiad")}
            >
              Obiad
            </div>
            <div
              className={`${styles.btn} ${styles.btn_wyrobu} ${
                activeCategory === "Kolacja" ? styles.active : ""
              }`}
              onClick={() => setActiveCategory("Kolacja")}
            >
              Kolacja
            </div>
          </div>
        )}
        <div id="menuContainer" className={styles.menu_container}>
          {menuData.map((dish, index) => (
            <div key={index} className={styles.dish_card}>
              <div className={styles.dish_card__image}>
                <img
                  src={`/uploads_img/${dish.dish_image}`}
                  alt={dish.dish_name}
                />
              </div>
              <div className={styles.dish_card__text}>
                <h3 className={styles.dish_card__name}>{dish.dish_name}</h3>
                <div className={styles.dish_card__row}>
                  <strong>Skladniki:</strong>
                  <div className={styles.dish_card__row_text}>
                    {dish.dish_description || "Описание отсутствует"}
                  </div>
                </div>
                <div className={styles.dish_card__row}>
                  <strong>Ingredients:</strong>
                  <div className={styles.dish_card__row_text}>
                    {dish.dish_ingredients || "Ингредиенты не указаны"}
                  </div>
                </div>
                <div className={styles.dish_card__row}>
                  <strong>Alergeny:</strong>
                  <div className={styles.dish_card__row_text}>
                    {dish.dish_allergens || "Аллергены не указаны"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
