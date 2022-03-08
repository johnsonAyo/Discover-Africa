function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <picture className="footer__logo">
          <img
            srcset="img/logo1.png 4x"
            alt="Full logo"
            src="img/logo1.png"
          />
        </picture>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Carrers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            <a href="#" className="footer__link">
              Sponsored Placements
            </a>
            <a href="#" className="footer__link">
              Advertise with Us Become an Affiliate
            </a>{" "}
            <br />
            Discover your dream destination with Jetsetter Book the best
            restaurants with TheFork Book tours and attraction tickets on Viator
            Read cruise reviews on Cruise Critic Get airline seating charts on
            Seat Guru Find vacation rentals on FlipKey Search for holiday
            rentals on Holiday Lettings Find a vacation home on Vacation Home
            Rentals Plan and book your next trip with Reco Trip Designers
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
