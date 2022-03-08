function Footer() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>01</span>About Travel Story
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>02</span>Your benfits
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>03</span>Popular Stories
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>04</span> Register
            </a>
          </li>
          <li className="navigation__item">
            <a href="#" className="navigation__link">
              <span>05</span> Explore
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
