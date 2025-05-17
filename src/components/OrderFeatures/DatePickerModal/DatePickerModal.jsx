import React, { useState, useEffect } from "react"; // Добавлен импорт useEffect
import { useModal } from "../ModalManager/useModal";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import styles from "./DatePickerModal.module.css";

const DatePickerModal = () => {
  const { closeModal, modalProps } = useModal();
  const { packageId, onSelectDates } = modalProps["date-picker"] || {};
  const [selectedDates, setSelectedDates] = useState([]);

  const handleConfirm = () => {
    onSelectDates(selectedDates);
    closeModal("date-picker");
  };

  useEffect(() => {
    const datepicker = new AirDatepicker("#datepicker", {
      inline: true,
      multipleDates: true,
      minDate: new Date(),
      onSelect: ({ date }) => {
        setSelectedDates(Array.isArray(date) ? date : [date]);
      },
    });

    return () => datepicker.destroy();
  }, []);

  return (
    <div className={styles.modalContent}>
      <h2>Wybierz daty dostawy dla pakietu #{packageId}</h2>
      <div id="datepicker" className={styles.datepicker} />
      <button onClick={handleConfirm} className={styles.confirmButton}>
        Zatwierdź
      </button>
    </div>
  );
};

export default DatePickerModal;
