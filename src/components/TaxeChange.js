import React, { useState } from "react";
import { Devise } from "../data/Devise";

function TaxeChange() {
  const [convert, setConvert] = useState(false);

  function Taxe() {
    const taxeHTML = document.getElementsByClassName("price");

    if (!convert) {
      for (let i = 0; i < taxeHTML.length; i++) {
        const p = taxeHTML[i];
        const vat = p.dataset.inc_vat;
        const price = p.dataset.price;
        if (vat.includes("false")) {
          p.dataset.price = ((price * 120) / 100).toFixed(2);
          p.dataset.inc_vat = "true";
          setConvert(true);
          p.innerHTML = p.dataset.price + " " + Devise[p.dataset.devise];
        }
      }
    }
  }

  return (
    <button className="button convert is-success mr-3" onClick={Taxe}>
      TTC
    </button>
  );
}

export default TaxeChange;
