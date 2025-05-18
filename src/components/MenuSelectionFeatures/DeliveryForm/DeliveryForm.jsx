import React from 'react';
import styles from './DeliveryForm.module.css';

const DeliveryForm = ({ onSubmit, onBack }) => {
  const [formData, setFormData] = React.useState({
    email: '',
    phone: '',
    fullname: '',
    street: '',
    house_number: '',
    klatka: '',
    floor: '',
    apartment: '',
    gate_code: '',
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className={styles.deliveryForm} onSubmit={handleSubmit}>
      <div className={styles.formSection}>
        <h3>Dane kontaktowe</h3>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label>E-mail</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Numer telefonu</label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Pełne imię i nazwisko</label>
            <input 
              type="text" 
              name="fullname" 
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>
        </div>
      </div>
      
      <div className={styles.formSection}>
        <h3>Dane dostawy</h3>
        <div className={styles.formGrid}>
          <div className={styles.formField}>
            <label>Ulica</label>
            <input 
              type="text" 
              name="street" 
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Dom</label>
            <input 
              type="text" 
              name="house_number" 
              value={formData.house_number}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Klatka</label>
            <input 
              type="text" 
              name="klatka" 
              value={formData.klatka}
              onChange={handleChange}
            />
          </div>
          
          <div className={styles.formField}>
            <label>Piętro</label>
            <input 
              type="text" 
              name="floor" 
              value={formData.floor}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Mieszkanie</label>
            <input 
              type="text" 
              name="apartment" 
              value={formData.apartment}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label>Kod do klatki</label>
            <input 
              type="text" 
              name="gate_code" 
              value={formData.gate_code}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className={`${styles.formField} ${styles.fullWidth}`}>
            <label>Uwagi</label>
            <input 
              type="text" 
              name="notes" 
              value={formData.notes}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      
      <div className={styles.formButtons}>
        <button type="button" className={styles.backButton} onClick={onBack}>
          Wstecz
        </button>
        <button type="submit" className={styles.submitButton}>
          Dalej
        </button>
      </div>
    </form>
  );
};

export default DeliveryForm;