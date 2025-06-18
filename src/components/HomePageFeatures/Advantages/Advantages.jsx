import React from "react";
import styles from "./Advantages.module.css";
import AdvantageItem from "./AdvantageItem/AdvantageItem";

const Advantages = () => {
  const advantages = [
    {
      icon: <img src="/assets/img/promo/free.png" alt="free" />,
      text: "Bezpłatna dostawa na terenie miasta Kraków",
    },
    {
      icon: <img src="/assets/img/promo/car.png" alt="car" />,
      text: "Dostawa od poniedziałku do soboty do godziny 8 rano",
    },
    {
      icon: <img src="/assets/img/promo/dataP.png" alt="dataP" />,
      text: "Zamawiaj dostawę na dogodną dla Ciebie liczbę dni.",
    },
    {
      icon: <img src="/assets/img/promo/time.png" alt="time" />,
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
