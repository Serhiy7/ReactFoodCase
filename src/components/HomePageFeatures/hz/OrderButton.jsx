import React from 'react';

const OrderButton = () => {
  return (
    <div id="buttonContainer" className="zamówienie-container" style={{ display: 'flex', paddingBottom: '20px', backgroundColor: '#fff' }}>
      <h4 className="menu__btn" id="toggleButton" style={{ fontSize: '33px' }}>Złóż zamówienie</h4>
    </div>
  );
};

export default OrderButton;
