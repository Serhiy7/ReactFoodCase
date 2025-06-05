import React, { useState, useEffect, useRef } from "react";
import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";
import styles from "./DatePickerModal.module.css";

// -----------------------------------------------------------------------------
// 1) Standalone version: accepts isOpen, onClose, onDateSelect, initialDate
// -----------------------------------------------------------------------------
const DatePickerModal = ({ isOpen, onClose, onDateSelect, initialDate }) => {
  const [datepicker, setDatepicker] = useState(null);
  const datepickerRef = useRef(null);

  useEffect(() => {
    if (isOpen && datepickerRef.current && !datepicker) {
      const options = {
        locale: {
          days: [
            "Niedziela",
            "Poniedziałek",
            "Wtorek",
            "Środa",
            "Czwartek",
            "Piątek",
            "Sobota",
          ],
          daysMin: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
          months: [
            "Styczeń",
            "Luty",
            "Marzec",
            "Kwiecień",
            "Maj",
            "Czerwiec",
            "Lipiec",
            "Sierpień",
            "Wrzesień",
            "Październik",
            "Listopad",
            "Grudzień",
          ],
          monthsShort: [
            "Sty",
            "Lut",
            "Mar",
            "Kwi",
            "Maj",
            "Cze",
            "Lip",
            "Sie",
            "Wrz",
            "Paź",
            "Lis",
            "Gru",
          ],
        },
        minDate: new Date(),
        onSelect: ({ date }) => {
          if (date) {
            const formattedDate = date.toLocaleDateString("pl-PL", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            });
            onDateSelect(formattedDate);
          }
        },
      };

      if (initialDate) {
        // initialDate format: "DD.MM.YYYY"
        const [dd, mm, yyyy] = initialDate.split(".");
        const parsed = new Date(`${yyyy}-${mm}-${dd}`);
        if (!isNaN(parsed)) {
          options.date = parsed;
        }
      }

      const dp = new AirDatepicker(datepickerRef.current, options);
      setDatepicker(dp);
    }

    return () => {
      if (datepicker) {
        datepicker.destroy();
        setDatepicker(null);
      }
    };
  }, [isOpen, initialDate, onDateSelect, datepicker]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Wybierz datę dostawy</h2>
        <div ref={datepickerRef} className={styles.datepicker} />
        <div className={styles.modalActions}>
          <button className={styles.cancelButton} onClick={onClose}>
            Anuluj
          </button>
          <button
            className={styles.confirmButton}
            onClick={() => {
              /* onDateSelect już wywoływane w onSelect AirDatepicker */
            }}
          >
            Zatwierdź
          </button>
        </div>
      </div>
    </div>
  );
};

export default DatePickerModal;
