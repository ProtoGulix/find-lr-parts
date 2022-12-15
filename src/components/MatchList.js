// React Initial
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Elements
import Match from "./Match";
import DeviseChange from "./DeviseChange";
import TaxeChange from "./TaxeChange";
import Load from "./Load";
import Error from "./Error";

function MatchList() {
  const search = useLocation().search;
  const ref = new URLSearchParams(search).get("r");

  const [data, setData] = useState(null);
  const [error, setError] = useState(true);

  // Call API
  async function LoadData(reference) {
    let bodyContent = JSON.stringify({
      ref: reference,
      sites: ["jc", "sf", "lp", "ls", "bol", "pad", "rp"],
    });

    fetch("https://refco.miladz.eu/api", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
      },
      body: bodyContent,
    })
      .then((response) => response.json())
      .then((usefulData) => {
        setData(usefulData);
      })
      .catch((e) => {
        console.error(`An error occurred: ${e}`);
      });
  }

  useEffect(() => {
    if (!data && ref !== "") {
      setError(false);
      LoadData(ref);
    }
  }, [ref, data]);

  if (!error) {
    return (
      <div>
        {!data && <Load />}
        {data && <List data={data} />}
      </div>
    );
  } else {
    return <Error />;
  }
}

function List(props) {
  const list = props.data;
  const thead = (
    <tr>
      <th>
        <abbr title="Référence">Réf</abbr>
      </th>
      <th className="is-danger">Prix</th>
      <th>Déscription</th>
      <th>Marque</th>
      <th>Origine</th>
    </tr>
  );

  list.site.sort((a, b) => a.price - b.price);

  if (list.score > 0) {
    return (
      <div className="container hero is-fullheight">
        <div className="section pt-3">
          <div className="is-vcentered match-commande mb-3" key="0000">
            <DeviseChange change={list.change} />
          </div>
          <table className="table is-fullwidth is-hoverable">
            <thead>{thead}</thead>

            <tbody>
              {list.site.map((data, index) => (
                <Match data={data} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <Error/>
    );
  }
}

export default MatchList;
