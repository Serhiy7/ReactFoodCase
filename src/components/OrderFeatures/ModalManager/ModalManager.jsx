// src/components/OrderFeatures/ModalManager/ModalManager.jsx

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
  const openModal = useCallback(
    (modalId, props = {}) => {
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

      setOpenModals((prev) => {
        const next = new Set(prev);
        next.add(modalId);
        return next;
      });

      document.body.classList.add(styles.modalOpen);
    },
    [
      /* закрыть модалку вызывается из closeModal, но зависимости добавлять не нужно, 
       так как closeModal сам по себе не изменяется (useCallback) */
    ]
  );

  const closeModal = useCallback(
    (modalId) => {
      setOpenModals((prev) => {
        const next = new Set(prev);
        next.delete(modalId);
        return next;
      });

      // Вызываем onClose callback, если он есть
      if (modalProps[modalId]?.onClose) {
        modalProps[modalId].onClose();
      }

      // Если после удаления последней модалки их больше не осталось — убираем CSS-класс
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

  // Функция рендера конкретного компонента по его типу
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
    MODAL_TYPES, // Экспортируем типы модалок для использования в других компонентах
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

ModalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Экспортируем ModalProvider как default, а ModalContext и MODAL_TYPES именованно
export default ModalProvider;
export { MODAL_TYPES };
