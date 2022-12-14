function Hero() {
  const title = "Le meilleur prix en quelques Clic !";
  const subtitle = "Entrez une référence d'orgine ...";
  return (
    <div>
      <img src="undraw_lost_re_xqjt.svg" alt="lost" width="300px" />
      <p className="title">{title}</p>
      <p className="subtitle">{subtitle}</p>
    </div>
  );
}

export default Hero;
