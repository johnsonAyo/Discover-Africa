export default function PopularTour(props: any) {
  const {
    duration,
    headCount,
    tour_guides,
    accomodation,
    difficulty,
    price,
    card_heading,
    img,
  } = props;
  return (
    <div className="col-1-of-3">
      <div className="card">
        <div className="card__side card__side--front">
          <div className={`card__picture card__picture--${img}`}>&nbsp;</div>
          <h4 className="card__heading">
            <span className={`card__heading-span card__heading-span--${img}`}>
              {card_heading}
            </span>
          </h4>
          <div className="card__details">
            <ul>
              <li>{duration}</li>
              <li>{headCount}</li>
              <li>{tour_guides}</li>
              <li>{accomodation}</li>
              <li>{difficulty}</li>
            </ul>
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <div className="card__cta">
            <div className="card__price-box">
              <p className="card__price-only">Only</p>
              <p className="card__price-value">{price}</p>
            </div>
            <a href="#popup" className="btn btn--white">
              Preview Story
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
