import React, { useState } from "react";
import { Devise } from "../data/Devise";

function DeviseChange(props) {
  const change = props.change;
  const [convert, setConvert] = useState(false);
  const [taux] = useState(change.GBPEUR);

  function Click() {
    const priceHTML = document.getElementsByClassName("price");

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

  return (
    <div class="field has-addons mb-0 mr-2">
      <p class="control">
        <buttom class="button convert is-success" onClick={Click}>
          £ &rarr; €
        </buttom>
      </p>
      <p class="control">
        <buttom class="button is-static">{taux}</buttom>
      </p>
    </div>
  );
}

export default DeviseChange;
