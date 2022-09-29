function Hero() {
  const title = "Enfin la solution pour piéces de Land Rover !";
  const subtitle = "Un seul endroit pour trouvé le meilleur prix.";
  return (
    <section class="hero">
      <div class="hero-body has-text-centered">
        <p class="title">{title}</p>
        <p class="subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;
