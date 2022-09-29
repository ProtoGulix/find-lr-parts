import Match from "./Match";

function MatchList(props) {
  const list = props.data;

  console.log(list);

  return (
    <div>
      <div className="block">
        <b>{list.score}</b> référence(s) trouvé pour la référence{" "}
        <b>{list.ref}</b>
      </div>

      <div class="block">
        {list.site.map((data) => (
          <Match data={data} />
        ))}
      </div>
    </div>
  );
}

export default MatchList;
