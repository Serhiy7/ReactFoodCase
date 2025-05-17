import { useContext } from "react";
import { ModalContext } from "./ModalManager";

export const useModal = () => {
  const context = useContext(ModalContext);
  
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  
  return context;
};