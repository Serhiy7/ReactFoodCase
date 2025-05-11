import React from "react";
import { useCalculatorForm } from "./useCalculatorForm";
import Modal from "../../ui/Modal/Modal"; 
import styles from "./Calculator.module.css";

const Calculator = () => {
  const { formData, handleChange, calculate, results } = useCalculatorForm();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={styles.calculator}>
      {/* Форма ввода... */}
      <button
        onClick={() => {
          calculate();
          setIsModalOpen(true);
        }}
      >
        Obliczać
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {/* Контент модального окна... */}
      </Modal>
    </div>
  );
};

export default Calculator;
