import React, { useState, useEffect } from "react";
// import styles from "./CookieBanner.module.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === null) setIsVisible(true);
  }, []);

  const handleResponse = (consent) => {
    localStorage.setItem("cookieConsent", consent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className={styles.banner}>
      <p>
        Мы используем cookies...
        <a href="/privacy_policy/">Политика конфиденциальности</a>
      </p>
      <div className={styles.buttons}>
        <button onClick={() => handleResponse("true")}>Принять</button>
        <button onClick={() => handleResponse("false")}>Отклонить</button>
      </div>
    </div>
  );
};

export default CookieBanner;
