import Match from "./Match";
import DeviseChange from "./DeviseChange";

function MatchList(props) {
  const list = props.data;
  const thead = (
    <thead>
      <tr>
        <th>
          <abbr title="Référence">Réf</abbr>
        </th>
        <th>Prix</th>
        <th>Déscription</th>
        <th>Fabricant</th>
        <th>Lien</th>
        <th>Origine</th>
      </tr>
    </thead>
  );

  list.site.sort((a, b) => a.price - b.price);

  if (list.score > 0) {
    return (
      <div class="section pt-3">
        <div class="is-vcentered match-commande mb-3" key="0000">
          <button class="button convert is-success mr-2">Trie</button>
          <DeviseChange />
        </div>
        <table class="table is-fullwidth is-hoverable">
          {thead}
          {list.site.map((data, index) => (
            <Match data={data} index={index} />
          ))}
        </table>
      </div>
    );
  } else {
    return (
      <div class="section pt-3">
        <div class="columns is-mobile">
          <div class="column is-half is-offset-one-quarter has-text-centered">
            <img src="inconnue.jpg" alt="Inconnue" />
          </div>
        </div>
      </div>
    );
  }
}

export default MatchList;
