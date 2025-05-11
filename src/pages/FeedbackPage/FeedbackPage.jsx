import React from "react";
import MainLayout from "../../components/layouts/MainLayout"; // Исправленный путь
import FeedbackForm from "../../components/features/FeedbackForm/FeedbackForm";

const FeedbackPage = () => {
  return (
    <MainLayout>
      <FeedbackForm />
    </MainLayout>
  );
};

export default FeedbackPage;
