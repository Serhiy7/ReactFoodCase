import React from 'react';
import styles from './DatePickerModal.module.css';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

const DatePickerModal = ({ isOpen, onClose, onDateSelect }) => {
  const [datepicker, setDatepicker] = React.useState(null);
  const datepickerRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen && datepickerRef.current && !datepicker) {
      const dp = new AirDatepicker(datepickerRef.current, {
        locale: {
          days: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
          daysMin: ["Nd", "Pn", "Wt", "Śr", "Czw", "Pt", "So"],
          months: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
          monthsShort: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"]
        },
        minDate: new Date(),
        onSelect: ({ date }) => {
          const formattedDate = date.toLocaleDateString("pl-PL");
          onDateSelect(formattedDate);
        }
      });
      setDatepicker(dp);
    }

    return () => {
      if (datepicker) {
        datepicker.destroy();
        setDatepicker(null);
      }
    };
  }, [isOpen, onDateSelect]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>Wybierz datę dostawy</h2>
        <div ref={datepickerRef} />
      </div>
    </div>
  );
};

export default DatePickerModal;