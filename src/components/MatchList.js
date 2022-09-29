import Match from "./Match";

function MatchList(props) {
  const list = props.data;

  if (list.score > 0) {
    return (
      <div class="section">
        <div class="block">
          {list.site.map((data) => (
            <Match data={data} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div class="section">
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
