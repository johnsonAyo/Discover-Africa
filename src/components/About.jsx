function About() {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">
          Exciting Discoveries for adventurous people
        </h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">
            You're going to fall in love with nature
          </h3>
          <p className="paragraph">
            As a first step in planning any trip abroad, check the Travel
            Advisories for your intended destination. You can see the world at a
            glance on our color-coded map .
          </p>

          <h3 className="heading-tertiary u-margin-bottom-small">
            Live adventures like you never have before
          </h3>
          <p className="paragraph">
            Read the Latest Reviews, Search for the Lowest Prices & Save Money
            on Tripadvisor. Detailed reviews and recent photos. Know what to
            expect before you book. Amazing Experiences. Millions of hotel
            reviews. Tours, Attractions + More. Easy price comparison.
          </p>

          <a href="#" className="btn-text">
            {" "}
            Learn more &rarr;
          </a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img
              src="img/nat-1-large.jpg"
              alt="Photo 1"
              className="composition__photo composition__photo--p1"
            />
            <img
              src="img/nat-2-large.jpg"
              alt="Photo 2"
              className="composition__photo composition__photo--p2"
            />
            <img
              src="img/nat-3-large.jpg"
              alt="Photo 3"
              className="composition__photo composition__photo--p3"
            />
          </div>
        </div>
      </div>{" "}
      /
    </section>
  );
}

export default About;
