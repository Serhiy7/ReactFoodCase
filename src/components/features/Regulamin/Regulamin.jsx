import React from 'react';
import { Link } from 'react-router-dom';

const Regulamin = () => {
  return (
    <div className="container">
      <h1 className="page-title">Regulamin</h1>
      <div className="page-grid revert">
        <div className="page-grid__main">
          <article className="article">
            <h2>Potwierdzając i opłacając zamówienie, zgadzasz się na poniższe zasady i warunki:</h2>
            <h2 id="order-placing">Złożenie i dostawa zamówienia</h2>
            <p>Zamówienie uważa się za złożone, a firma zobowiązuje się je dostarczyć dopiero po otrzymaniu płatności na wskazany numer konta lub poprzez system płatności na stronie internetowej. Po potwierdzeniu płatności otrzymasz potwierdzenie na e-mail lub SMS-em.</p>

            <h2 id="menu-compliance">Zgodność menu</h2>
            <p>Menu dostarczone klientowi zawiera dania wskazane na dany dzień zgodnie z harmonogramem menu na stronie. Nie ma możliwości zamiany dań w już potwierdzonym zamówieniu.</p>

            <h2 id="delivery-conditions">Warunki dostawy</h2>
            <p>Dostawa jest bezpłatna na terenie miasta Kraków i odbywa się w godzinach od 2:00 do 7:00 rano. Możesz wskazać preferowany przedział czasowy dostawy, a my postaramy się go uwzględnić.</p>

            <h2 id="delivery-guarantee">Gwarancja dostawy</h2>
            <p>Firma zobowiązuje się dostarczyć zamówienie do godziny 7:00 rano. W przypadku opóźnienia przekraczającego jedną godzinę, klient ma prawo zrezygnować z zamówienia i żądać zwrotu pieniędzy lub otrzymać zamówienie oraz dodatkowe bezpłatne zamówienie na następny dzień, na życzenie klienta.</p>

            <h2 id="delivery-issues">Niemożność dostawy z przyczyn niezależnych</h2>
            <p>Jeśli zamówienie nie może zostać dostarczone z przyczyn niezależnych od kuriera lub firmy (nieprawidłowy kod do wejścia, błędny adres, niesprawny domofon itp.), firma nie ponosi odpowiedzialności za niedostarczenie, a środki za ten dzień nie podlegają zwrotowi.</p>

            <h2 id="order-receiving">Przyjmowanie zamówień</h2>
            <p>Zamówienia przyjmowane są do godziny 21:00 dnia poprzedzającego dostawę. W przypadku anulowania zamówienia po tym czasie, środki nie podlegają zwrotowi.</p>

            <h2 id="contact-info">Informacje kontaktowe</h2>
            <p>W razie pytań lub problemów z zamówieniem skontaktuj się z nami pod adresem e-mail: <a href="mailto:kontakt@twojarestauracja.pl">kontakt@twojarestauracja.pl</a> lub telefonicznie: <a href="tel:+48123456789">+48 123 456 789</a></p>
          </article>
        </div>
        <div className="page-grid__aside hidden-mob">
          <ul className="page-nav">
            <li className="page-nav__item">
              <a href="#order-placing" className="page-nav__link">Złożenie i dostawa zamówienia</a>
            </li>
            <li className="page-nav__item">
              <a href="#menu-compliance" className="page-nav__link">Zgodność menu</a>
            </li>
            <li className="page-nav__item">
              <a href="#delivery-conditions" className="page-nav__link">Warunki dostawy</a>
            </li>
            <li className="page-nav__item">
              <a href="#delivery-guarantee" className="page-nav__link">Gwarancja dostawy</a>
            </li>
            <li className="page-nav__item">
              <a href="#delivery-issues" className="page-nav__link">Niemożność dostawy z przyczyn niezależnych</a>
            </li>
            <li className="page-nav__item">
              <a href="#order-receiving" className="page-nav__link">Przyjmowanie zamówień</a>
            </li>
            <li className="page-nav__item">
              <a href="#contact-info" className="page-nav__link">Informacje kontaktowe</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Regulamin;
