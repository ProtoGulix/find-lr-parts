function Banner() {
  return (
    <div className="hero-head">
      <div className="container">
        <nav className="navbar">
          <Brand />
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button is-white is-outlined" href="http://localhost:3000/">
                  <ion-icon name="heart" size="large"></ion-icon>
                  <strong>Faire un Don</strong>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Brand(){
  return (
    <div className="navbar-brand">
      <a className="navbar-item" href="http://localhost:3000">
        <ion-icon name="library" size="large"></ion-icon>
        Land Rover Référence
      </a>
    </div>
  );
}

export default Banner;
