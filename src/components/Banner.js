function Banner() {
  return (
    <div class="hero-head">
      <div class="container">
        <nav class="navbar">
          <div class="navbar-brand">
            <a class="navbar-item" href="http://localhost:3000">
              <ion-icon name="library" size="large"></ion-icon>
              Land Rover Référence
            </a>
          </div>
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-white is-outlined">
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

export default Banner;
