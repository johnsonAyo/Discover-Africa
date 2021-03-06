import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <Link to={"/public"} className="navigation__link">
              <span>01</span>Public Travel Blogs
            </Link>
          </li>

          <li className="navigation__item">
            <Link to={"/"} className="navigation__link">
              <span>02</span>Popular Stories
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/register"} className="navigation__link">
              <span>03</span>Register
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/login"} className="navigation__link">
              <span>04</span>Login
            </Link>
          </li>
          <li className="navigation__item">
            <Link to={"/"} className="navigation__link">
              <span>05</span>Explore
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
