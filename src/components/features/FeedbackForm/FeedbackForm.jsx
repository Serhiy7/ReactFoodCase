import React from 'react';
import { useFeedbackForm } from './useFeedbackForm';
import Modal from '../ui/Modal/Modal'; // Используем общий Modal
import styles from './FeedbackForm.module.css';

const FeedbackForm = () => {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useFeedbackForm();
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (e) => {
    const result = await handleSubmit(e);
    if (result?.success) setShowModal(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Twoje uwagi dotyczące diety</h2>
      <form onSubmit={onSubmit} noValidate>
        <div className={styles.field}>
          <label>Twoje imię</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className={styles.error}>{errors.name}</span>}
        </div>
        {/* Остальные поля... */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Wysyłanie..." : "Wyślij"}
        </button>
      </form>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <p>Twoja wiadomość została wysłana!</p>
      </Modal>
    </div>
  );
};

export default FeedbackForm;