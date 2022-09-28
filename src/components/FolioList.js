import Folio from "./Folio";

function FolioList({ folios }) {
  console.log(folios);

  return folios.data.map((data) => <Folio folio={data} />);
}

export default FolioList;
