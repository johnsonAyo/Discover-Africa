export default function Story(props: any) {
  const {
    sub_heading,
    card__text,
    location,
    date,
    card_heading,
    img,
    ratings,
    id
  } = props;

  return (
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card__picture card__picture--1">&nbsp;</div>
          <h4 className="card__heading">
            <span className="card__heading-span card__heading-span--1">
              {card_heading}
            </span>
          </h4>
        </div>
      </div>
  );
}
