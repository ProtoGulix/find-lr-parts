// React Initial
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Elements
import { Devise } from "../data/Devise";

function DeviseChange(props) {
  const change = props.change;
  const [convert, setConvert] = useState(false);
  const [taux, setTaux] = useState(1);

  const search = useLocation().search;
  const dc = new URLSearchParams(search).get("dc");

  function Change(devise) {
    const priceHTML = document.getElementsByClassName("price");

    for (let i = 0; i < priceHTML.length; i++) {
      const p = priceHTML[i];
      if (!p.dataset.devise.includes(devise)) {
        setTaux(change[p.dataset.devise + devise]);
        console.log(taux);
      }
    }
  }

  function Click(devise) {
    const priceHTML = document.getElementsByClassName("price");

    Change('EUR');

    if (!convert) {
      for (let i = 0; i < priceHTML.length; i++) {
        const p = priceHTML[i];
        const dev = p.dataset.devise;
        const price = p.dataset.price;
        if (dev.includes("GBP")) {
          p.dataset.price = (price * taux).toFixed(2);
          p.dataset.devise = "EUR";
          setConvert(true);
          p.innerHTML = p.dataset.price + " " + Devise[p.dataset.devise];
        }
      }
    }
  }

  useEffect(() => {
    if (!dc.includes("ALL")) {
      Change(dc);
    }
  });

  return (
    <div className="field has-addons mb-0 mr-2">
      <p className="control">
        <button className="button convert is-success" onClick={Click('EUR')}>
          £ &rarr; €
        </button>
      </p>
      <p className="control">
        <button className="button is-static">{taux}</button>
      </p>
    </div>
  );
}

export default DeviseChange;
