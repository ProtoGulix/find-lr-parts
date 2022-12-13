// React Initial
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Elements
import { Devise, optionDevise } from "../data/Devise";

function DeviseChange(props) {
  const change = props.change;
  const [devise, setDevise] = useState(optionDevise[0].value);

  const search = useLocation().search;
  const dc = new URLSearchParams(search).get("dc");

  useEffect(() => {
    Change(dc);
  });

  function DeviseChange(event) {
    var d = event.target.value;
    setDevise(d);
    Change(d);
  }

  async function Change(devise) {
    let priceHTML = document.getElementsByClassName("price");

    for (let i = 0; i < priceHTML.length; i++) {
      const p = priceHTML[i];
      const price = p.dataset.price;

      if (!Object.is(devise, p.dataset.devise)) {
        console.log(devise + p.dataset.devise);

        p.innerHTML =
          (price * change[p.dataset.devise + devise]).toFixed(2) +
          Devise[devise];
      } else {
        p.innerHTML = price + Devise[devise];
      }
    }
  }

  function ButtonTaux() {
    if (!dc.includes("ALL")) {
      return (
        <p className="control">
          <button className="button is-static">1 {Devise[devise]}</button>
        </p>
      );
    }
  }

  function ButtonDevise() {
    return (
      <p className="control">
        <span className="select is-normal">
          <select className="is-success" value={devise} onChange={DeviseChange}>
            {optionDevise.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </span>
      </p>
    );
  }

  return (
    <div className="field has-addons mb-0 mr-2">
      <ButtonDevise />
      <ButtonTaux />
    </div>
  );
}

export default DeviseChange;
