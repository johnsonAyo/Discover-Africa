function Nav() {
  return (
    <>
      <header className="headerbar">
        <nav className="navbar navbar--tours">
          <a href="#" className="navbar__el">
            <h2> All Stories </h2>
          </a>
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
          {/* <div className="header__logo">
        <img src="./../../public/img/logo1.png" alt="Natours logo" />
      </div> */}
      <nav className="nav nav--user">
        <a href="#" className="nav__el">My Travel Stories</a>
        <a href="#" className="nav__el">
          {/* <img src="../../public/img/logo-green-1x.png" alt="User photo" className="nav__user-img" /> */}
          <span>User</span>
        </a>

        {/* <!-- <button className="nav__el">Log in</button>
        <button className="nav__el nav__el--cta">Sign up</button> --> */}
      </nav>
      </header>
    </>
  );
}

export default Nav;
