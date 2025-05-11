// src/components/layouts/Header/constants.js
export const HEADER_LINKS = [
    {
      label: "Главная",
      path: "/",
      isAnchor: false
    },
    {
      label: "Преимущества",
      path: "#advantages", // якорная ссылка
      isAnchor: true
    },
    {
      label: "Меню",
      path: "/menu",
      isAnchor: false
    },
    {
      label: "Контакты",
      path: "/contacts",
      isAnchor: false
    }
  ];
  
  // Перенесите ADVANTAGES_DATA в отдельный файл, если используется в другом месте
  // Например: src/components/Advantages/constants.js