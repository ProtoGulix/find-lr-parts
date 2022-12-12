// React initial

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Elements

import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";

function App() {
  return (
    <BrowserRouter>
      <section className="hero is-link">
        <Banner />
      </section>
      <Routes>
        <Route path="/" element={<SearchSection />}></Route>
        <Route path="/search" element={<MatchList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function SearchSection() {
  return (
    <section className="hero is-link">
      <Hero />
      <div className="hero-body container">
        <SearchForm />
      </div>
    </section>
  );
}

function SearchForm() {
  return (
    <form action="/search" method="get">
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input is-medium" type="text" id="fref" name="r" />
        </div>
        <div className="control">
          <button className="button is-info is-medium" type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
      <div className="field has-addons">
        <p className="control ">
          <span className="select is-small">
            <select name="vat">
              <option value="false">HT</option>
              <option value="true">TTC</option>
            </select>
          </span>
        </p>
        <p className="control">
          <span className="select is-small">
            <select name="dc">
                <option value="ALL">Toute</option>
              <option value="EUR">€</option>
              <option value="GBP">£</option>
            </select>
          </span>
        </p>
      </div>
    </form>
  );
}

export default App;
