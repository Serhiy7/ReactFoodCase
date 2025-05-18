import React, { createContext, useState, useCallback } from "react";
import PropTypes from "prop-types";
import styles from "./ModalManager.module.css";
import DatePickerModal from "../DatePickerModal/DatePickerModal";

// Типы модальных окон
const MODAL_TYPES = {
  DATE_PICKER: "date-picker",
  // Добавьте другие типы модалок здесь
};

// Создаем контекст с начальными значениями
export const ModalContext = createContext({
  openModal: () => console.warn("No modal provider"),
  closeModal: () => console.warn("No modal provider"),
  closeAllModals: () => console.warn("No modal provider"),
  openModals: new Set(),
  modalProps: {},
});

// Основной компонент провайдера
export const ModalProvider = ({ children }) => {
  const [openModals, setOpenModals] = useState(new Set());
  const [modalProps, setModalProps] = useState({});

  // Мемоизированные функции для оптимизации
  const openModal = useCallback((modalId, props = {}) => {
    if (!Object.values(MODAL_TYPES).includes(modalId)) {
      console.error(`Unknown modal type: ${modalId}`);
      return;
    }

    setModalProps((prev) => ({
      ...prev,
      [modalId]: {
        ...props,
        // Добавляем обязательные пропсы
        onClose: props.onClose || (() => closeModal(modalId)),
      },
    }));
    setOpenModals((prev) => new Set(prev).add(modalId));
    document.body.classList.add(styles.modalOpen);
  }, []);

  const closeModal = useCallback(
    (modalId) => {
      setOpenModals((prev) => {
        const newModals = new Set(prev);
        newModals.delete(modalId);
        return newModals;
      });

      // Вызываем onClose callback если он есть
      if (modalProps[modalId]?.onClose) {
        modalProps[modalId].onClose();
      }

      if (openModals.size === 1) {
        document.body.classList.remove(styles.modalOpen);
      }
    },
    [modalProps, openModals.size]
  );

  const closeAllModals = useCallback(() => {
    // Вызываем onClose для всех открытых модалок
    openModals.forEach((modalId) => {
      if (modalProps[modalId]?.onClose) {
        modalProps[modalId].onClose();
      }
    });

    setOpenModals(new Set());
    document.body.classList.remove(styles.modalOpen);
  }, [openModals, modalProps]);

  // Функция рендера модального окна по типу
  const renderModalComponent = useCallback(
    (modalId) => {
      const currentProps = modalProps[modalId] || {};

      switch (modalId) {
        case MODAL_TYPES.DATE_PICKER:
          return <DatePickerModal {...currentProps} />;
        default:
          console.warn(`No renderer for modal type: ${modalId}`);
          return null;
      }
    },
    [modalProps]
  );

  // Предоставляем значение контекста
  const contextValue = {
    openModals,
    openModal,
    closeModal,
    closeAllModals,
    modalProps,
    MODAL_TYPES, // Экспортируем типы модалок для использования в компонентах
  };

  return (
    <ModalContext.Provider value={contextValue}>
      {children}

      {/* Рендер портала для модальных окон */}
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

// PropTypes для лучшей документации
ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Экспорт для удобства
export default {
  ModalContext,
  ModalProvider,
  MODAL_TYPES,
};
