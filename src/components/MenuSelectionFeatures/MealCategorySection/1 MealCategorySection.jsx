// src/components/MenuSelectionFeatures/MealCategorySection/MealCategorySection.jsx
import React, { useState, useEffect, useMemo } from "react";
import MealItem from "../MealItem/MealItem";
import WeightSelector from "../WeightSelector/WeightSelector";
import styles from "./MealCategorySection.module.css";

const MealCategorySection = ({
  category,
  title,
  onSelect,
  initialSelection,
}) => {
  // 1) Для каждой категории (sniad, obiad, kolacja) задаём свой набор опций веса
  //    и свою четвёрку блюд. Обернём это всё в useMemo, чтобы не пересоздавать
  //    массивы при каждом рендере (только при изменении category).
  const { weightOptions, allMeals } = useMemo(() => {
    switch (category) {
      case "sniad": {
        // Завтрак: лёгкие порции (меньший вес), низкие цены
        const weightOptions = [
          { weight: 100, price: 12 }, // 100 г – 12 zł
          { weight: 150, price: 17 }, // 150 г – 17 zł
          { weight: 200, price: 22 }, // 200 г – 22 zł
        ];

        const allMeals = [
          {
            id: 101,
            name: "Jajecznica",
            description: "Jajka na bekonie z cebulką",
            priceBase: 16,
            image: "/assets/img/jajecznica.jpg",
          },
          {
            id: 102,
            name: "Owsianka",
            description: "Płatki owsiane z owocami sezonowymi",
            priceBase: 13,
            image: "/assets/img/owsianka.jpg",
          },
          {
            id: 103,
            name: "Naleśniki",
            description: "Naleśniki z dżemem truskawkowym",
            priceBase: 14,
            image: "/assets/img/nalesniki.jpg",
          },
          {
            id: 104,
            name: "Kanapki",
            description: "Świeży chleb z serem i wędliną",
            priceBase: 12,
            image: "/assets/img/kanapki.jpg",
          },
        ];
        return { weightOptions, allMeals };
      }

      case "obiad": {
        // Обед: средние порции, средние цены
        const weightOptions = [
          { weight: 200, price: 20 }, // 200 г – 20 zł
          { weight: 300, price: 28 }, // 300 г – 28 zł
          { weight: 400, price: 36 }, // 400 г – 36 zł
        ];

        const allMeals = [
          {
            id: 201,
            name: "Schabowy",
            description: "Kotlet schabowy z ziemniakami i kapustą",
            priceBase: 22,
            image: "/assets/img/schabowy.jpg",
          },
          {
            id: 202,
            name: "Zupa pomidorowa",
            description: "Zupa pomidorowa z ryżem",
            priceBase: 11,
            image: "/assets/img/zupa_pomidorowa.jpg",
          },
          {
            id: 203,
            name: "Pierogi ruskie",
            description: "Pierogi z serem i ziemniakami",
            priceBase: 18,
            image: "/assets/img/pierogi_ruskie.jpg",
          },
          {
            id: 204,
            name: "Gulasz wołowy",
            description: "Gulasz mięsny z kaszą",
            priceBase: 24,
            image: "/assets/img/gulasz.jpg",
          },
        ];
        return { weightOptions, allMeals };
      }

      case "kolacja": {
        // Ужин: крупные порции, более высокие цены
        const weightOptions = [
          { weight: 250, price: 30 }, // 250 г – 30 zł
          { weight: 350, price: 42 }, // 350 г – 42 zł
          { weight: 450, price: 54 }, // 450 г – 54 zł
        ];

        const allMeals = [
          {
            id: 301,
            name: "Sałatka grecka",
            description: "Sałatка z serem feta i oliwkami",
            priceBase: 17,
            image: "/assets/img/salatka_grecka.jpg",
          },
          {
            id: 302,
            name: "Grillowany kurczak",
            description: "Pierś z курczaka z warzywami",
            priceBase: 19,
            image: "/assets/img/grillowany_kurczak.jpg",
          },
          {
            id: 303,
            name: "Ryba pieczona",
            description: "Dorsz pieczony w ziołach",
            priceBase: 20,
            image: "/assets/img/ryba_pieczona.jpg",
          },
          {
            id: 304,
            name: "Zupa krem z brokułów",
            description: "Krem brokułowy z grzankami",
            priceBase: 16,
            image: "/assets/img/zupa_brokulowa.jpg",
          },
        ];
        return { weightOptions, allMeals };
      }

      default:
        return { weightOptions: [], allMeals: [] };
    }
  }, [category]);

  // 2) Локальное состояние выбранного веса и блюда
  const [selectedWeight, setSelectedWeight] = useState(
    initialSelection?.weight
      ? weightOptions.find((w) => w.weight === initialSelection.weight)
      : null
  );
  const [selectedMeal, setSelectedMeal] = useState(
    initialSelection?.id
      ? allMeals.find((m) => m.id === initialSelection.id)
      : null
  );

  // 3) Синхронизация при изменении initialSelection или category (allMeals/weightOptions)
  useEffect(() => {
    if (initialSelection) {
      const w =
        weightOptions.find((w) => w.weight === initialSelection.weight) || null;
      const m = allMeals.find((m) => m.id === initialSelection.id) || null;
      setSelectedWeight(w);
      setSelectedMeal(m);
    } else {
      setSelectedWeight(null);
      setSelectedMeal(null);
    }
  }, [initialSelection, category, allMeals, weightOptions]);

  // 4) Обработчики клика по опции веса и по карточке блюда
  const handleWeightClick = (option) => {
    if (selectedWeight?.weight === option.weight) {
      // если клик по уже выбранному весу — сбрасываем всё
      setSelectedWeight(null);
      if (selectedMeal) {
        setSelectedMeal(null);
        onSelect(null);
      }
    } else {
      // иначе выбираем новый вес, сбрасываем предыдущее блюдо
      setSelectedWeight(option);
      if (selectedMeal) {
        setSelectedMeal(null);
        onSelect(null);
      }
    }
  };

  const handleMealClick = (meal) => {
    if (!selectedWeight) return; // нельзя выбрать блюдо без выбранного веса

    if (selectedMeal?.id === meal.id) {
      // клик по уже выбранному блюду → сброс всего
      setSelectedMeal(null);
      setSelectedWeight(null);
      onSelect(null);
    } else {
      // выбираем новое блюдо
      setSelectedMeal(meal);
      const payload = {
        id: meal.id,
        name: meal.name,
        description: meal.description,
        weight: selectedWeight.weight,
        price: selectedWeight.price,
      };
      onSelect(payload);
    }
  };

  return (
    <section className={styles.categorySection} data-category={category}>
      <h2 className={styles.sectionTitle}>{title}</h2>

      {/* 1. Блок выбора веса */}
      <WeightSelector
        options={weightOptions}
        onSelect={handleWeightClick}
        selected={selectedWeight}
      />

      {/* 2. Сетка всех блюд */}
      <div className={styles.mealGrid}>
        {allMeals.map((meal) => {
          const isThisSelected = selectedMeal?.id === meal.id;
          const disabled = !selectedWeight;

          return (
            <MealItem
              key={meal.id}
              meal={{
                ...meal,
                price: meal.priceBase, // базовая цена из allMeals
                weight: selectedWeight?.weight || 0, // показываем «граммовку» рядом с ценой
              }}
              isSelected={isThisSelected}
              isDisabled={disabled}
              onSelect={() => handleMealClick(meal)}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MealCategorySection;
