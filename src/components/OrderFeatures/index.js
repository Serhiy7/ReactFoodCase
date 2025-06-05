// src/components/OrderFeatures/index.js

// DatePickerModal (если собираетесь импортировать его напрямую)
export { default as DatePickerModal } from "./DatePickerModal/DatePickerModal";

// Форма доставки
export { default as DeliveryForm } from "./DeliveryForm/DeliveryForm";

// Провайдер модалок
export { default as ModalProvider } from "./ModalManager/ModalManager";
// После изменений useModal.js экспортируется как default
export { default as useModal } from "./ModalManager/useModal";

// Многошаговая форма
export { default as MultiStepForm } from "./MultiStepForm/MultiStepForm";

// Итоги заказа
export { default as OrderSummary } from "./OrderSummary/OrderSummary";
export { default as OrderTotal } from "./OrderTotal/OrderTotal";

// Выбор пакетов
export { default as PackageSelection } from "./PackageSelection/PackageSelection";
export { default as PackageWidget } from "./PackageWidget/PackageWidget";

// Индикатор шагов
export { default as StepsIndicator } from "./StepsIndicator/StepsIndicator";
