// React initial

import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Elements

import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";

function App() {
  const data = "data";
  return (
    <BrowserRouter>
      <section class="hero is-link">
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
    <section class="hero is-link">
      
      <Hero />
      <div class="hero-body">
        <div class="columns is-multiline is-centered is-desktop">
          <div class="column is-one-third">
            <SearchForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function SearchForm() {
  return (
    <form action="/search" method="get">
      <div class="field has-addons">
        <div class="control is-expanded">
          <input class="input is-medium" type="text" id="fref" name="r" />
        </div>
        <div class="control">
          <button class="button is-info is-medium" type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </form>
  );
}

export default App;
