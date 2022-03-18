export default function Story(props: any) {
  const {
    sub_heading,
    card__text,
    location,
    date,
    card_heading,
    img,
    ratings,
    id,
  } = props;

  return (
    <div className="cardd">
      <div className="card__side card__side--front">
        <div className={`card__picture card__picture--${img}`}>&nbsp;</div>
        <h4 className="card__heading">
          <span className={`card__heading-span card__heading-span--1`}>
            {card_heading}
          </span>
        </h4>
        <div className="card__detail">
          <h4 className="card__sub-heading">{sub_heading}</h4>
          <p className="card__text">{card__text}</p>
          <div className="card__data">
            <svg className="card__icon">
              <use xlinkHref="img/icons.svg#icon-map-pin"></use>
            </svg>
            <span>{location}</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              <use xlinkHref="img/icons.svg#icon-calendar"></use>
            </svg>
            <span>{date}</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              <use xlinkHref="img/icons.svg#icon-flag"></use>
            </svg>
            <span>3 stops</span>
          </div>
          <div className="card__data">
            <svg className="card__icon">
              <use xlinkHref="img/icons.svg#icon-user"></use>
            </svg>
            <span>{ratings}</span>
          </div>
          <div></div>
          <div>
            <a href="#" className="btn btn--animated btn--blue ">
              Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
