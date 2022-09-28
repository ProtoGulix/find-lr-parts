function Folio({folio}){

    
    return(
        <div className="block" key={folio.id}>{ folio.attributes.titre }</div>
    )
}

export default Folio