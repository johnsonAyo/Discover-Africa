function Popup() {
  return (
    <div className="popup" id="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src="img/nat-8.jpg" alt="Tour photo" className="popup__img" />
          <img src="img/nat-9.jpg" alt="Tour photo" className="popup__img" />
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="popup__close">
            &times;
          </a>
          <h2 className="heading-secondary u-margin-bottom-small">
            Travel stories Sites
          </h2>

          <p className="popup__text">
            Discover your dream destination with Jetsetter Book the best
            restaurants with TheFork Book tours and attraction tickets on Viator
            Read cruise reviews on Cruise Critic Get airline seating charts on
            Seat Guru Find vacation rentals on FlipKey Search for holiday
            rentals on Holiday Lettings Find a vacation home on Vacation Home
            Rentals Plan and book your next trip with Reco Trip Designers
          </p>
          <a href="#" className="btn btn--green">
            View Stories Now
          </a>
        </div>
      </div>
    </div>
  );
}

export default Popup;
