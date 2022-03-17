import { stories } from "../../data/popularTourdata";
import Story from "./StoryComponent";
import { Link } from "react-router-dom";

function Stories() {
  const storyElement = stories.map((story) => {
    return <Story {...story} />;
    // <PopularTour popularTour={popularTour.id} />;
  });
  return (
    <>
      <section className="section-tours" id="section-tours">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            List of all public Vacation Stories
          </h2>
        </div>
        <div className="grid">{storyElement}</div>{" "}
        <div className="u-center-text u-margin-top-huge">
          <Link to={"/register"} className="btn btn--green">
            Discover all travel Stories
          </Link>
        </div>
      </section>
    </>
  );
}

export default Stories;
