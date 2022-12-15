// React initial
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Elements

import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";
import { SearchForm } from "./Search";


function App() {
  return (
    <BrowserRouter>
      <Banner />
      <Routes>
        <Route path="/" element={<SearchSection />} />
        <Route path="/search" element={<MatchList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function SearchSection() {
  return (
    <section className="hero">
      <div className="hero-head has-text-centered mt-3">
        <Hero />
        <div className="columns mt-3">
          <div className="column is-half is-offset-one-quarter">
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="hero-body container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <article class="message is-light">
              <div class="message-header">
                <p>C'est quoi ?</p>
              </div>
              <div class="message-body">
                Ce moteur de cherche vous aide trouvé le meilleur prix pour vos
                pièces de Land-Rover. <strong>Comment ?</strong> Il vous suffit
                d'une référence, la recherche ce fait automatiquement sur une
                large sélection de distributeur.
                <br />
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
