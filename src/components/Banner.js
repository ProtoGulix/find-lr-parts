import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
} from "react-router-dom";

function Banner() {
  return (
    <div class="hero-head">
      <div class="container">
        <nav class="navbar">
          <Brand />
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

function Brand(){
  return (
    <div class="navbar-brand">
      <a class="navbar-item" href="http://localhost:3000">
        <ion-icon name="library" size="large"></ion-icon>
        Land Rover Référence
      </a>
    </div>
  );
}

export default Banner;
