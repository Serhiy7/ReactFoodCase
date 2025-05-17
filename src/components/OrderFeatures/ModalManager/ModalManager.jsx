import React, { createContext, useState } from "react";
import styles from "./ModalManager.module.css";
import DatePickerModal from "../DatePickerModal/DatePickerModal";

// Экспортируем контекст отдельно
export const ModalContext = createContext();

// Основной компонент провайдера
export const ModalProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState(new Set());
  const [modalProps, setModalProps] = useState({});

  const openModal = (modalId, props = {}) => {
    setModalProps((prev) => ({ ...prev, [modalId]: props }));
    setOpenModals((prev) => new Set(prev).add(modalId));
    document.body.classList.add(styles.modalOpen);
  };

  const closeModal = (modalId) => {
    setOpenModals((prev) => {
      const newModals = new Set(prev);
      newModals.delete(modalId);
      return newModals;
    });

    if (openModals.size === 1) {
      document.body.classList.remove(styles.modalOpen);
    }
  };

  const closeAllModals = () => {
    setOpenModals(new Set());
    document.body.classList.remove(styles.modalOpen);
  };

  return (
    <ModalContext.Provider
      value={{
        openModals,
        openModal,
        closeModal,
        closeAllModals,
        modalProps,
      }}
    >
      {children}
      {Array.from(openModals).map((modalId) => (
        <div key={modalId} className={styles.modalOverlay}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {renderModalComponent(modalId)}
          </div>
        </div>
      ))}
    </ModalContext.Provider>
  );
};

function renderModalComponent(modalId) {
  switch (modalId) {
    case "date-picker":
      return <DatePickerModal />;
    default:
      return null;
  }
}

// Экспорт по умолчанию для удобства
export default {
  ModalContext,
  ModalProvider,
};
