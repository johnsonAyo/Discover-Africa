function Nav() {
  return (
    <>
      <nav className="nav nav--tours">
        <a href="#" className="nav__el">
          <h2> All Tours </h2>
        </a>
        <form className="nav__search">
          <button className="nav__search-btn">
            <svg>
              <use href="img/icons.svg#icon-search"></use>
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search tours"
            className="nav__search-input"
          />
        </form>
      </nav>
    </>
  );
}

export default Nav;
