import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";
import Load from "./Load";
import FindCount from "./FindCount";
import ListSiteWeb from "./ListSiteWeb";
import React, { useState } from "react";

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
    fetch(`http://212.227.212.30:8000/?ref=${ref}`)
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
    <div>
      <section class="hero is-link is-small">
        <Banner />
        <div class="hero-body">
          <div class="container has-text-centered is-4">
            {welcome && <Hero />}
            <form onSubmit={handleSubmit}>
              <div class="field has-addons">
                <div class="control is-expanded">
                  <input
                    class="input is-medium"
                    type="text"
                    onChange={(e) => setRef(e.target.value)}
                  />
                </div>
                <div class="control">
                  <button class="button is-info is-medium" type="submit">
                    Recherche
                  </button>
                </div>
              </div>
            </form>
            {search && <FindCount data={data} />}
          </div>
        </div>
        {welcome && <ListSiteWeb />}
      </section>
      <div class="container">
        {loading && <Load />}
        {search && <MatchList data={data} />}
        {!error && <p>{error}</p>}
        <Footer />
      </div>
    </div>
  );
}

export default App;
