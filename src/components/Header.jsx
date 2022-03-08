import Navigation from "./../components/Navigation";
function Header() {
  return (
    <div>
      <title>Travel stories | Document your Memories</title>
      <Navigation />

      <header className="header">
        <div className="header__logo-box">
          <img src="img/logo1.png" alt="Logo" className="header__logo" />
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Travel Stories</span>
            <span className="heading-primary--sub">
              Document your Adventures
            </span>
          </h1>

          <a href="#section-tours" className="btn btn--white btn--animated">
            Post Your Travel Stories
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
