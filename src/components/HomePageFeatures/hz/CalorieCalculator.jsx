import React, { useState } from 'react';

const CalorieCalculator = () => {
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState(75);
  const [height, setHeight] = useState(180);
  const [activity, setActivity] = useState(1.2);
  const [showModal, setShowModal] = useState(false);
  const [bmr, setBmr] = useState(0);
  const [calories, setCalories] = useState(0);
  const [recommendation, setRecommendation] = useState('');

  const calculateCalories = () => {
    let bmrValue;
    if (gender === 'male') {
      bmrValue = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmrValue = 10 * weight + 6.25 * height - 5 * age - 161;
    }
    const caloriesValue = bmrValue * activity;
    setBmr(bmrValue.toFixed(2));
    setCalories(caloriesValue.toFixed(2));

    if (caloriesValue < 1500) {
      setRecommendation('1500');
    } else if (caloriesValue < 2000) {
      setRecommendation('2000');
    } else {
      setRecommendation('2500');
    }

    setShowModal(true);
  };

  return (
    <section className="section is-white" style={{ paddingTop: '0px', paddingBottom: '20px' }}>
      <div className="container section__container">
        <div className="calc">
          <h2 className="calc__title">Kalkulator kalorii</h2>
          <div className="calc__grid">
            <div className="calc__field">
              <div className="calc__label">Wiek (lata):</div>
              <div className="calc__range">
                <input type="tel" min="10" max="80" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="range" min="10" max="80" value={age} onChange={(e) => setAge(e.target.value)} />
              </div>
            </div>
            <div className="calc__field">
              <div className="calc__label">Płeć:</div>
              <div className="calc__select">
                <select value={gender} onChange={(e) => setGender(e.target.value)}>
                  <option value="male">Mężczyzna</option>
                  <option value="female">Kobieta</option>
                </select>
              </div>
            </div>
            <div className="calc__field">
              <div className="calc__label">Waga (kg):</div>
              <div className="calc__range">
                <input type="tel" min="10" max="200" value={weight} onChange={(e) => setWeight(e.target.value)} />
                <input type="range" min="10" max="200" value={weight} onChange={(e) => setWeight(e.target.value)} />
              </div>
            </div>
            <div className="calc__field">
              <div className="calc__label">Wysokość (cm):</div>
              <div className="calc__range">
                <input type="tel" min="100" max="300" value={height} onChange={(e) => setHeight(e.target.value)} />
                <input type="range" min="100" max="300" value={height} onChange={(e) => setHeight(e.target.value)} />
              </div>
            </div>
            <div className="calc__field">
              <div className="calc__label">Poziom aktywności:</div>
              <div className="calc__select">
                <select value={activity} onChange={(e) => setActivity(e.target.value)}>
                  <option value="1.2">Minimum</option>
                  <option value="1.375">Lekka aktywność</option>
                  <option value="1.55">Umiarkowana aktywność</option>
                  <option value="1.725">Wysoka aktywność</option>
                  <option value="1.9">Bardzo duża aktywność</option>
                </select>
              </div>
            </div>
          </div>
          <button className="btn calc__btn" onClick={calculateCalories}>Obliczać</button>
          {showModal && (
            <div className={`calc-modal calc__modal modal ${showModal ? 'show' : ''}`} id="calc">
              <div className="calc-modal__inner">
                <div className="calc-modal__close" onClick={() => setShowModal(false)}>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 23.5L23.5 1M1 1L23.5 23.5" stroke="#232324" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="calc-modal__row">
                  <div className="calc-modal__title">Twoje wyniki:</div>
                  <div className="calc-modal__result">Podstawowa przemiana materii (BMR): <span className="bmr">{bmr}</span> kcal/dzień</div>
                  <div className="calc-modal__result">Zapotrzebowanie kaloryczne: <span className="calories">{calories}</span> kcal/dzień</div>
                </div>
                <div className="calc-modal__row">
                  <div className="calc-modal__title">Polecamy Cię:</div>
                  <div className="calc-modal__result">Pakiet <span className="recomend">{recommendation}</span> kcal</div>
                </div>
                <a href="/index2/" className="btn calc-modal__btn">Zamów pakiet <span className="btn-recomend">{recommendation}</span> kalorii</a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CalorieCalculator;
