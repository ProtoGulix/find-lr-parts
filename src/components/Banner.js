import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SearchSimple, SearchForm } from "./Search";

function Banner() {
  return (
    <section class="hero">
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <Brand />

          <div className="navbar-menu" id="navbarBasicExample">
            <div className="navbar-start">
              <a className="navbar-item">Home</a>
              <a className="navbar-item">Documentation</a>
            </div>

            <div className="navbar-end">
              <div className="level-item">
                <Routes>
                  <Route path="/search" element={<SearchSimple />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
}

function Brand() {
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="https://refco.miladz.eu">
        <ion-icon name="library" size="large"></ion-icon>
        <h1>
          <b>Réf&Co.</b>
        </h1>
      </a>
      <a
        role="button"
        className="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="nnavbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  );
}

export default Banner;
