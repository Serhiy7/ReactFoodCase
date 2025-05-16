import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <PromoSection />
      <MenuSection />
      <AdvantagesSection />
      <CalorieCalculator />
      <OrderButton />
    </div>
  );
}

export default App;