import React from "react";
import styles from "./Advantages.module.css";
import AdvantageItem from "./AdvantageItem/AdvantageItem";

const Advantages = () => {
  const advantages = [
    {
      icon: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
      ),
      text: "Bezpłatna dostawa na terenie miasta Kraków",
    },
    {
      icon: (
        <svg
          width="37"
          height="37"
          viewBox="0 0 37 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
      ),
      text: "Dostawa od poniedziałku do soboty do godziny 8 rano",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
      ),
      text: "Zamawiaj dostawę na dogodną dla Ciebie liczbę dni.",
    },
    {
      icon: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG content */}
        </svg>
      ),
      text: "Zamówienia przyjmowane są do godziny 21:00 dnia przed dostawą",
    },
  ];

  return (
    <div className={styles.advants}>
      {advantages.map((advantage, index) => (
        <AdvantageItem
          key={index}
          icon={advantage.icon}
          text={advantage.text}
        />
      ))}
    </div>
  );
};

export default Advantages;
