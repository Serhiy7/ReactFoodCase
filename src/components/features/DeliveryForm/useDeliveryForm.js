import { useState } from "react";

export const useDeliveryForm = (onSubmit) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    fullname: "",
    street: "",
    house_number: "",
    klatka: "",
    floor: "",
    apartment: "",
    gate_code: "",
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return { formData, handleChange, handleSubmit };
};
