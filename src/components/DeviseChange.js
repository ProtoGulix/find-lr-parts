// React Initial
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

//Elements
import { Devise, optionDevise } from "../data/Devise";

function DeviseChange(props) {
  const change = props.change;
  const search = useLocation().search;
  const [devise, setDevise] = useState(new URLSearchParams(search).get("dc"));

  useEffect(() => {
    Change(devise);
  }, []);

  function DeviseChange(event) {
    var d = event.target.value;
    setDevise(d);
    Change(d);
  }

  function Change(devise) {
    let priceHTML = document.getElementsByClassName("price");

    for (let i = 0; i < priceHTML.length; i++) {
      const p = priceHTML[i];
      const price = p.dataset.price;

      if (!Object.is(devise, p.dataset.devise)) {
        p.innerHTML =
          (price * change[p.dataset.devise + devise]).toFixed(2) +
          Devise[devise];
      } else {
        p.innerHTML = price + Devise[devise];
      }
    }
  }

  return (
    <div className="field mb-0 mr-2">
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
    </div>
  );
}

export default DeviseChange;
