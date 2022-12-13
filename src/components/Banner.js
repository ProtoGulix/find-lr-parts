function Banner() {
  return (
    <div className="hero-head">
      <div className="container">
        <nav className="navbar">
          <Brand />
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
