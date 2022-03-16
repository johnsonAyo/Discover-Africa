import Popup from "../Popup";
import popularToursData from "../../data/popularTourdata";
import PopularTour from "./Tour";
import { Link } from "react-router-dom";
function Tours() {
  const tourElement = popularToursData.map((popularTour) => {
    return <PopularTour {...popularTour} />;
    // <PopularTour popularTour={popularTour.id} />;
  });
  return (
    <>
      <Popup />
      <section className="section-tours" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">Most popular Travel stories</h2>
        </div>
        <div className="row">{tourElement}</div>
        <div className="u-center-text u-margin-top-huge">
          <Link to={"/register"} className="btn btn--green">
            Discover all travel Stories
          </Link>
        </div>
      </section>
    </>
  );
}

export default Tours;
