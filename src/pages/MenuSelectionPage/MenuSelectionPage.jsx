import React, { useState } from 'react';
import styles from './MenuSelectionPage.module.css';
import { Header, Footer } from '../../layouts';
import {
  StepsIndicator,
  MenuSelectionWidget,
  DeliveryForm,
  OrderSummary,
  OrderTotal
} from '../../components/MenuSelectionFeatures';

const MenuSelectionPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [orderData, setOrderData] = useState({
    selectedMeals: [],
    delivery: {},
    total: 0
  });

  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.pageMain}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>Menu do wyboru</h1>
          
          <StepsIndicator currentStep={currentStep} />
          
          <div className={styles.pageGrid}>
            <div className={styles.pageGridMain}>
              {currentStep === 1 && (
                <MenuSelectionWidget 
                  onSelectionChange={(selectedMeals) => 
                    setOrderData({...orderData, selectedMeals})
                  }
                />
              )}
              
              {currentStep === 2 && (
                <DeliveryForm 
                  onSubmit={(data) => {
                    setOrderData({...orderData, delivery: data});
                    setCurrentStep(3);
                  }}
                  onBack={() => setCurrentStep(1)}
                />
              )}
              
              {currentStep === 3 && (
                <OrderSummary 
                  order={orderData}
                  onBack={() => setCurrentStep(2)}
                />
              )}
            </div>
            
            <div className={styles.pageGridAside}>
              <OrderTotal 
                order={orderData}
                currentStep={currentStep}
                onNextStep={() => setCurrentStep(currentStep + 1)}
                onPrevStep={() => setCurrentStep(currentStep - 1)}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MenuSelectionPage;