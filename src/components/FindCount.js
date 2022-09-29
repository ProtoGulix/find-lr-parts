function FindCount(props) {
  const list = props.data;

  if (list.score > 0) {
    return (
      <center>
        <b>{list.score}</b> match(s) trouvé pour la référence <b>{list.ref}</b>
      </center>
    );
  } else {
    return <center>Aucune correspondance trouvé.</center>;
  }
}

export default FindCount;
