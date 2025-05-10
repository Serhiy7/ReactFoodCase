import React from "react";
import Header from "../Header";
import Footer from "../Footer";

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
