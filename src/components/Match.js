function Match({ data }) {
  return (
    <div class="box">
      <article class="media">
        <div class="media-left">
          <figure class="image is-128x128">
            <img
              src={data.image}
              alt="Image"
            />
          </figure>
        </div>
        <div class="media-left">
          <h1
            class="title"
            data-devise={data.devise}
            data-inc_vat={data.inc_vat}
          >
            {data.price}
          </h1>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{data.ref}</strong>
              <br />
              {data.name}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Match;
