import Banner from "./Banner";
import FolioList from "./FolioList";
import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:1337/api/folios`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }, []);

  return (
    <div class="container">
      <Banner />
      {loading && <p>Loading...</p>}
      {!loading && <FolioList folios={data} />}
    </div>
  );
}

export default App;
