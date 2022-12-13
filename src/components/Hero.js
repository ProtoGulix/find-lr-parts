function Hero() {
  const title = "Enfin la solution pour piéces de Land Rover !";
  const subtitle = "Un seul endroit pour trouvé le meilleur prix.";
  return (
    <section className="hero">
      <div className="hero-body has-text-centered">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
      </div>
    </section>
  );
}

export default Hero;
