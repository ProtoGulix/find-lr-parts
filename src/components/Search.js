import { optionDevise } from "../data/Devise";

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
  return (
    <form action="/search" method="get">
      <div className="field has-addons">
        <div className="control">
          <input className="input is-small" type="text" id="fref" name="r" />
        </div>
        <div className="control">
          <button className="button is-info is-small" type="submit">
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>
      </div>
      <input type="hidden" name="dc" value="EUR" />
    </form>
  );
}
