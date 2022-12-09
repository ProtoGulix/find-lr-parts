import Banner from "./Banner";
import Footer from "./Footer";
import MatchList from "./MatchList";
import Hero from "./Hero";
import Load from "./Load";
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
    fetch(`http://localhost:8000/?ref=${ref}`)
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

  return (
    <React.Fragment>
      <div class="wrapper">
        <section class="hero is-link">
          <Banner />
          <div class="hero-body">
            <div class="columns is-multiline is-centered is-desktop">
              <div class="column is-one-third">
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
                        <ion-icon name="search-outline"></ion-icon>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div class="container matchlist">
          {/*search && <FindCount data={data} />*/}
          {loading && <Load />}
          {search && <MatchList data={data} />}
          {!error && <p>{error}</p>}
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
