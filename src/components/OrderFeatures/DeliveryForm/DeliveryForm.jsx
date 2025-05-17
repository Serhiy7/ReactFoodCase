import React, { useState } from "react"; // Добавлен импорт useState
import styles from "./DeliveryForm.module.css";

const DeliveryForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullname: "",
    street: "",
    house_number: "",
    klatka: "",
    floor: "",
    apartment: "",
    gate_code: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className={styles.pageGridTab}>
      <button className={`${styles.btn} ${styles.payTotalPrev}`}>
        Zmień kolejność
      </button>

      <form onSubmit={handleSubmit} className={styles.deliveryWidget}>
        <div className={styles.deliveryWidgetRow}>
          <div className={styles.deliveryWidgetTitle}>Dane kontaktowe:</div>
          <div className={styles.deliveryWidgetGrid}>
            <div className={`${styles.deliveryWidgetField} ${styles.large}`}>
              <div className={styles.deliveryWidgetLabel}>E-mail</div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`${styles.deliveryWidgetInput} ${styles.emailInput}`}
                placeholder="E-mail"
              />
            </div>

            <div className={styles.deliveryWidgetField}>
              <div className={styles.deliveryWidgetLabel}>Numer telefonu</div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className={`${styles.deliveryWidgetInput} ${styles.phoneInput}`}
                placeholder="Numer telefonu"
              />
            </div>

            {/* Остальные поля аналогично */}
          </div>
        </div>

        <button type="submit" className={styles.submitButton}>
          Zapisz dane dostawy
        </button>
      </form>
    </div>
  );
};

export default DeliveryForm;
