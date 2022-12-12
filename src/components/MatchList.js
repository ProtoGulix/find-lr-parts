// React Initial
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Elements
import Match from "./Match";
import DeviseChange from "./DeviseChange";
import TaxeChange from "./TaxeChange";
import Load from "./Load";

function MatchList() {
  const search = useLocation().search;
  const ref = new URLSearchParams(search).get("r");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function LoadData(reference) {
    fetch(`http://localhost:8000/scrap/?ref=${reference}&devise=EUR&taxe=TTC`)
      .then((response) => response.json())
      .then((usefulData) => {
        setLoading(false);
        setData(usefulData);
      })
      .catch((e) => {
        setError(e);
        console.error(`An error occurred: ${e}`);
      });
  }

  useEffect(() => {
    console.log(ref);
    if (!data && ref) {
      LoadData(ref);
    }
  });
  return (
    <div class="container hero is-fullheight">
      {!data && <Load />}
      {data && <List data={data} />}
    </div>
  );
}

function List(props) {
  const list = props.data;
  const thead = (
    <thead>
      <tr>
        <th>
          <abbr title="Référence">Réf</abbr>
        </th>
        <th>Prix</th>
        <th>Déscription</th>
        <th>Marque</th>
        <th>Origine</th>
      </tr>
    </thead>
  );

  list.site.sort((a, b) => a.price - b.price);

  if (list.score > 0) {
    return (
      <div class="section pt-3">
        <div class="is-vcentered match-commande mb-3" key="0000">
          <button class="button convert is-success mr-2">Trie</button>
          <DeviseChange change={list.change} />
          <TaxeChange />
        </div>
        <table class="table is-fullwidth is-hoverable">
          {thead}
          {list.site.map((data, index) => (
            <Match data={data} index={index} />
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div class="section pt-3">
        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter has-text-centered">
            <img src="inconnue.jpg" alt="Inconnue" />
          </div>
        </div>
      </div>
    );
  }
}

export default MatchList;
