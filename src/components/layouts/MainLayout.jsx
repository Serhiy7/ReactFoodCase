import React from "react";
import Header from "./Header/Header";  // Путь относительно MainLayout.jsx
import Footer from "./Footer/Footer";  // Путь относительно MainLayout.jsx

const MainLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="page-main">
        <div className="container">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;