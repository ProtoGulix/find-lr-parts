import { optionDevise } from "../data/Devise";
import { useLocation } from "react-router-dom";

export function SearchForm() {
  return (
    <form action="/search" method="get">
      <div className="field has-addons">
        <p className="control">
          <span className="select is-medium">
            <select className="is-success is-small" name="dc">
              {optionDevise.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.text}
                </option>
              ))}
            </select>
          </span>
        </p>
        <div className="control is-expanded">
          <input
            className="input is-medium"
            type="text"
            id="fref"
            name="r"
            placeholder="Référence Land-Rover, ERR6066, ...."
          />
        </div>
        <div className="control">
          <button className="button is-info is-medium" type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
    </form>
  );
}

export function SearchSimple() {
  const search = useLocation().search;
  const ref = new URLSearchParams(search).get("r");

  // DROPDOWN
  document.addEventListener("DOMContentLoaded", function () {
    var dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("click", function (event) {
      event.stopPropagation();
      dropdown.classList.toggle("is-active");
    });
  });

  return (
    <form action="/search" method="get">
      <div className="field is-horizontal mt-2 mb-0">
        <div className="field-label is-normal">
          <label className="label">Recherche</label>
        </div>
        <div className="field-body">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="text"
                id="fref"
                name="r"
                size="25"
              />
            </div>
            <div className="control">
              <button className="button is-info" type="submit">
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </div>
            <div className="control dropdown is-right">
              <div className="dropdown-trigger">
                <a
                  className="button"
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <ion-icon name="settings-sharp"></ion-icon>
                  <span className="icon is-small is-link">
                    <ion-icon name="chevron-down-outline"></ion-icon>
                  </span>
                </a>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="/" className="dropdown-item">
                    Overview
                  </a>
                  <a href="/" className="dropdown-item">
                    Layout
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="/" className="dropdown-item">
                    More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="hidden" name="dc" value="EUR" />
    </form>
  );
}
