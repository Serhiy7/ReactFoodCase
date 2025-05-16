import React, { useState, useEffect } from 'react';

const MenuSection = () => {
  const [activeTab, setActiveTab] = useState('standard');
  const [activeCategory, setActiveCategory] = useState('Sniadanie');
  const [menuData, setMenuData] = useState([]);

  const fetchMenu = async (category) => {
    try {
      const response = await fetch(`/admin/fetch_menu.php?category=${encodeURIComponent(category)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setMenuData(data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  useEffect(() => {
    fetchMenu(activeCategory);
  }, [activeCategory]);

  return (
    <section className="section section-menu" id="menu" style={{ paddingTop: '0px' }}>
      <div className="container section__container">
        <h2 className="section__title" style={{ marginBottom: '25px' }}>Zobaczyć Menu</h2>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '5px', paddingBottom: '20px' }}>
          <div className={`btn ${activeTab === 'standard' ? 'active' : ''} btn-centre`} onClick={() => setActiveTab('standard')}>Standardowe menu</div>
          <div className={`btn ${activeTab === 'choice' ? 'active' : ''} btn-centre`} onClick={() => setActiveTab('choice')}>Menu do wyboru</div>
        </div>
        {activeTab === 'choice' && (
          <div className="wyboru" style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div className={`btn btn-wyrobu ${activeCategory === 'Sniadanie' ? 'active' : ''}`} onClick={() => setActiveCategory('Sniadanie')}>Sniadanie</div>
            <div className={`btn btn-wyrobu ${activeCategory === 'Obiad' ? 'active' : ''}`} onClick={() => setActiveCategory('Obiad')}>Obiad</div>
            <div className={`btn btn-wyrobu ${activeCategory === 'Kolacja' ? 'active' : ''}`} onClick={() => setActiveCategory('Kolacja')}>Kolacja</div>
          </div>
        )}
        <div id="menuContainer" className="menu-container">
          {menuData.map((dish, index) => (
            <div key={index} className="dish-card">
              <div className="dish-card__image">
                <img src={`/uploads_img/${dish.dish_image}`} alt={dish.dish_name} />
              </div>
              <div className="dish-card__text">
                <h3 className="dish-card__name">{dish.dish_name}</h3>
                <div className="dish-card__row">
                  <strong>Skladniki:</strong>
                  <div className="dish-card__row-text">{dish.dish_description || 'Описание отсутствует'}</div>
                </div>
                <div className="dish-card__row">
                  <strong>Ingredients:</strong>
                  <div className="dish-card__row-text">{dish.dish_ingredients || 'Ингредиенты не указаны'}</div>
                </div>
                <div className="dish-card__row">
                  <strong>Alergeny:</strong>
                  <div className="dish-card__row-text">{dish.dish_allergens || 'Аллергены не указаны'}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
