// React Initital
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

// Elements
import { Devise } from "../data/Devise";

function TaxeChange() {
  const search = useLocation().search;
  const [taxe, setTaxe] = useState(new URLSearchParams(search).get("vat"));

  const optionTaxe = [
    { value: "true", text: "TTC" },
    { value: "false", text: "HT" },
  ];

  function TaxeChange(event) {
    var t = event.target.value;
    setTaxe(t);
    Taxe(t);
  }

  function Taxe(taxe) {
    const taxeHTML = document.getElementsByClassName("price");

    for (let i = 0; i < taxeHTML.length; i++) {
      const p = taxeHTML[i];
      const price = p.dataset.price;
      if (!Object.is(p.dataset.incvat, taxe)) {
        if (!Object.is(p.dataset.incvat, "true")) {
          p.innerHTML = (price * 1.2).toFixed(2) + Devise[p.dataset.devise];
        }
        if (!Object.is(p.dataset.incvat, "false")) {
          p.innerHTML = (price / 1.2).toFixed(2) + Devise[p.dataset.devise];
        } 
      } else {
        p.innerHTML = price + Devise[p.dataset.devise];
      }
    }
  }

  return (
    <div className="field mb-0 mr-2">
      <p className="control">
        <span className="select is-normal">
          <select className="is-success" value={taxe} onChange={TaxeChange}>
            {optionTaxe.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </span>
      </p>
    </div>
  );
}

export default TaxeChange;
