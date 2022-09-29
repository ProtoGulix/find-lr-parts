import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";
import Load from "./Load";
import React, { useState, useEffect } from "react";

function App() {
  const [ref, setRef] = useState(null);
  const [welcome, setWelcome] = useState(true);
  const [search, setSearch] = useState(false);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    setWelcome(false);
    setLoading(true);
    setSearch(false);
    event.preventDefault();
    setRef({ ref });
    fetch(`http://localhost:8000/v1/?ref=${ref}`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setSearch(true);
        setData(usefulData);
      })
      .catch((e) => {
        setError(e);
        console.error(`An error occurred: ${e}`);
      });
  };

  console.log(ref);

  return (
    <div class="container">
      <Banner />
      <div class="block">
        <form onSubmit={handleSubmit}>
          <div class="field has-addons">
            <div class="control">
              <input
                class="input is-large"
                type="text"
                onChange={(e) => setRef(e.target.value)}
              />
            </div>
            <div class="control">
              <button class="button is-info is-large" type="submit">
                Recherche
              </button>
            </div>
          </div>
        </form>
      </div>
      {welcome && <Hero />}
      {loading && <Load />}
      {search && <MatchList data={data} />}
      {!error && <p>{error}</p>}
      <Footer />
    </div>
  );
}

export default App;
