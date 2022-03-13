import Navigation from "./../components/Navigation";
import Logo from "./../components/Logo";
function Header() {
  return (
    <div>
      <title>Travel stories | Document your Memories</title>
      <Navigation />

      <header className="header">
        <Logo />

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Travel Experience</span>
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
