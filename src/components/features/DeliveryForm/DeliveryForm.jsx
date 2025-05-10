import React from "react";
import PropTypes from "prop-types";
import { useDeliveryForm } from "./useDeliveryForm";
import styles from "./DeliveryForm.module.css";

const DeliveryForm = ({ onSubmit }) => {
  const { formData, handleChange, handleSubmit } = useDeliveryForm(onSubmit);

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.section}>
        <h3 className={styles.title}>Dane kontaktowe:</h3>
        <div className={styles.grid}>
          <div className={styles.field}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          {/* Остальные поля... */}
        </div>
      </div>
      <button type="submit" className={styles.submitButton}>
        Podać adres dostawy
      </button>
    </form>
  );
};

DeliveryForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default DeliveryForm;
