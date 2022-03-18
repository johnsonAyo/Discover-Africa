import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <header className="headerbar">
        <nav className="navbar navbar--tours">
          <Link to={"/"} className="navbar__el">
            <h2> All Stories </h2>
          </Link>
          <form className="navbar__search">
            <button className="navbar__search-btn">
              <svg>
                <use href="img/icons.svg#icon-search"></use>
              </svg>
            </button>
            <input
              type="text"
              placeholder="Search tours"
              className="navbar__search-input"
            />
          </form>
        </nav>
        <Link to={"/"} className="headerbar__logo">
          <img src="img/logo1.png" alt="Natours logo" />
        </Link>

        <nav className="nav nav--user">
          <Link to={"/"} className="nav__el">
            My Travel Stories
          </Link>
          <Link to={"/"} className="nav__el">
            {/* <img src="" alt="User photo" className="nav__user-img" /> */}
            <span>User</span>
          </Link>

          {/* <!-- <button className="nav__el">Log in</button> */}
          {/* <button className="nav__el nav__el--cta">Sign up</button> --> */}
        </nav>
      </header>
    </>
  );
}

export default Nav;
