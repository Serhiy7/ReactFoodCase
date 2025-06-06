// src/data/mealData.js

/**
 * В этом файле храним «имитацию сервера»:
 * — для каждой категории («sniad», «obiad», «kolacja») возвращаем
 *   набор weightOptions и набор allMeals (массив объектов).
 */

export const mealData = {
  sniad: {
    weightOptions: [
      { weight: 100, price: 12 }, // 100 г — 12 zł
      { weight: 150, price: 17 }, // 150 г — 17 zł
      { weight: 200, price: 22 }, // 200 г — 22 zł
    ],
    allMeals: [
      {
        id: 101,
        name: "Jajecznica",
        description: "Jajka na bekonie z cebulką",
        priceBase: 16,
        image: "/assets/img/jajecznica.jpg",
      },
      {
        id: 102,
        name: "Owsianka",
        description: "Płatki owsiane z owocami sezonowymi",
        priceBase: 13,
        image: "/assets/img/owsianka.jpg",
      },
      {
        id: 103,
        name: "Naleśniki",
        description: "Naleśniki z dżemem truskawkowym",
        priceBase: 14,
        image: "/assets/img/nalesniki.jpg",
      },
      {
        id: 104,
        name: "Kanapki",
        description: "Świeży chleb z serem i wędliną",
        priceBase: 12,
        image: "/assets/img/kanapki.jpg",
      },
    ],
  },

  obiad: {
    weightOptions: [
      { weight: 200, price: 20 }, // 200 г — 20 zł
      { weight: 300, price: 28 }, // 300 г — 28 zł
      { weight: 400, price: 36 }, // 400 г — 36 zł
    ],
    allMeals: [
      {
        id: 201,
        name: "Schabowy",
        description: "Kotlet schabowy z ziemniakami i kapustą",
        priceBase: 22,
        image: "/assets/img/schabowy.jpg",
      },
      {
        id: 202,
        name: "Zupa pomidorowa",
        description: "Zupa pomidorowa z ryżem",
        priceBase: 11,
        image: "/assets/img/zupa_pomidorowa.jpg",
      },
      {
        id: 203,
        name: "Pierogi ruskie",
        description: "Pierogi z serem i ziemniakami",
        priceBase: 18,
        image: "/assets/img/pierogi_ruskie.jpg",
      },
      {
        id: 204,
        name: "Gulasz wołowy",
        description: "Gulasz mięsny z kaszą",
        priceBase: 24,
        image: "/assets/img/gulasz.jpg",
      },
    ],
  },

  kolacja: {
    weightOptions: [
      { weight: 250, price: 30 }, // 250 г — 30 zł
      { weight: 350, price: 42 }, // 350 г — 42 zł
      { weight: 450, price: 54 }, // 450 г — 54 zł
    ],
    allMeals: [
      {
        id: 301,
        name: "Sałatka grecka",
        description: "Sałatка z serem feta i oliwkami",
        priceBase: 17,
        image: "/assets/img/salatka_grecka.jpg",
      },
      {
        id: 302,
        name: "Grillowany kurczak",
        description: "Pierś z курczaka z warzywami",
        priceBase: 19,
        image: "/assets/img/grillowany_kurczak.jpg",
      },
      {
        id: 303,
        name: "Ryba pieczona",
        description: "Dorsz pieczony w ziołach",
        priceBase: 20,
        image: "/assets/img/ryba_pieczona.jpg",
      },
      {
        id: 304,
        name: "Zupa krem z brokułów",
        description: "Krem brokułowy z grzankami",
        priceBase: 16,
        image: "/assets/img/zupa_brokulowa.jpg",
      },
    ],
  },
};
