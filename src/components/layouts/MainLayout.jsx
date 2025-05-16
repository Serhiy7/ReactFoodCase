// layouts/MainLayout.jsx
import { Header, Footer } from "."; // Импорт из текущей папки (index.js)

const MainLayout = ({ children }) => {
  return (
    <div className="app">
      <Header />
      <main>{children}</main> {/* Сюда подставляется контент страницы */}
      <Footer />
    </div>
  );
};

export default MainLayout;
