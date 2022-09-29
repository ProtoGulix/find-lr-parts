function Match({ data }) {
  const url_image = data.image;

  return (
    <div class="box">
      <a href={data.link} target="_blank" rel="noreferrer">
        <article class="media">
          <div class="media-left">
            <figure class="image is-128x128">
              <img src={url_image} alt={url_image} />
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <h1
                class="title"
                data-devise={data.devise}
                data-inc_vat={data.inc_vat}
              >
                {data.price}
              </h1>
              <p>
                <strong>{data.ref}</strong>
                <br />
                {data.name}
              </p>
            </div>
          </div>
        </article>
      </a>
    </div>
  );
}

export default Match;
