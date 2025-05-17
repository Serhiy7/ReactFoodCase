import React from "react";
import styles from "./Feedback.module.css";

const Feedback = () => {
  return (
    <div className={styles.feedback}>
      <div className={styles.feedback__title}>Feedback</div>
      <form className={styles.feedback__form}>
        <div className={styles.feedback__field}>
          <label className={styles.feedback__label}>Name:</label>
          <input className={styles.feedback__input} type="text" name="name" />
        </div>
        <div className={styles.feedback__field}>
          <label className={styles.feedback__label}>Email:</label>
          <input className={styles.feedback__input} type="email" name="email" />
        </div>
        <div className={styles.feedback__field}>
          <label className={styles.feedback__label}>Message:</label>
          <textarea
            className={styles.feedback__textarea}
            name="message"
          ></textarea>
        </div>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Feedback;
