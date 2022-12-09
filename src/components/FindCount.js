function FindCount(props) {
  const list = props.data;

  if (list.score > 0) {
    return (
      <div class="section">
        <b>{list.score}</b> match(s) trouvé pour la référence <b>{list.ref}</b>
      </div>
    );
  } else {
    return <center>Aucune correspondance trouvé.</center>;
  }
}

export default FindCount;
