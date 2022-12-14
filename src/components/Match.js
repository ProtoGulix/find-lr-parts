import { Devise } from "../data/Devise";
import { Source, Origine } from "../data/Source";

function Match(props) {
  const data = props.data;
  const url_image = data.image;
  const price = Price(data.price);
  const devise = Devise[data.devise];

  function Price(price) {
    if (data.price == null) {
      return null;
    } else {
      if (data.inc_vat) {
        return data.price.toFixed(2);
      } else {
        data.inc_vat = true;
        return (data.price * 1.2).toFixed(2);
      }
    }
  }

  function Tronquer(chaine, longueur) {
    if (chaine.length > longueur) {
      return chaine.substring(0, longueur) + " ...";
    } else {
      return chaine;
    }
  }

  return (
    <tr key={props.index}>
      <th>
        <a href={data.link} target="blank">
          {data.ref}
        </a>
      </th>
      <td
        className="price"
        data-price={price}
        data-devise={data.devise}
        data-incvat={data.inc_vat}
      >
        {price} {devise}
      </td>
      <td>{data.name}</td>
      <td>{data.manufacturer}</td>

      <td>
        <img
          src={Origine[Source[data.source].origine]}
          className="flag"
          alt="flag"
        />
        {Source[data.source].name}
      </td>
    </tr>
  );
}

export default Match;
