import React from 'react';

const OrderOptions = () => {
  return (
    <div className="hidden" style={{ display: 'flex', justifyContent: 'space-evenly', paddingLeft: '15px', paddingRight: '15px', gap: '5px', backgroundColor: '#fff' }}>
      <a href="/index2/" className="btn btn-centre">Standardowe menu</a>
      <a href="/menu_do_wyboru/" className="btn btn-centre">Menu do wyboru</a>
    </div>
  );
};

export default OrderOptions;
