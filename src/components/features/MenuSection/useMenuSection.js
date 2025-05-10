//(логика)
import { useState } from 'react';

export const useMenuSection = () => {
  const [activeTab, setActiveTab] = useState('standard');
  const [activeMealType, setActiveMealType] = useState('breakfast');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  const handleMealTypeChange = (mealTypeId) => {
    setActiveMealType(mealTypeId);
  };

  return {
    activeTab,
    activeMealType,
    handleTabChange,
    handleMealTypeChange,
  };
};