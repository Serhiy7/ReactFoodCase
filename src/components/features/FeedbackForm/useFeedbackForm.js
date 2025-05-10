import { useState } from 'react';

export const useFeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Proszę wprowadzić swoje imię";
    if (!formData.email.trim()) {
      newErrors.email = "Proszę wprowadzić swój email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Proszę wprowadzić poprawny adres email";
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      newErrors.message = "Minimalna liczba znaków to 15";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const response = await fetch("/admin/send_recomends.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Błąd sieci");
      return await response.json();
    } finally {
      setIsSubmitting(false);
    }
  };

  return { formData, errors, isSubmitting, handleChange: (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, handleSubmit };
};