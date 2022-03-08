function Stories() {
  return (
    <section className="section-stories">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay muted loop>
          <source src="./../styles/img/video2.mp4" type="video/mp4" />
          <source src="./../styles/img/video2.mp4" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">We make people genuinely happy</h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-8.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Victor Ejiogwu</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Abuja City Tour - Discover Nigeria's Capital
            </h3>
            <p>
              Leisure comes to everyone, how you spend it, is what makes the
              difference. This tour avails you the opportunity to explore the
              beautiful city of Abuja and the sights that makes it truly the
              capital city of Nigeria. This is an adventure to engage in after
              that long day conference and you need to unwind, relax and
              rejuvenate.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story__shape">
            <img
              src="/img/nat-9.jpg"
              alt="Person on a tour"
              className="story__img"
            />
            <figcaption className="story__caption">Daniel Israel</figcaption>
          </figure>
          <div className="story__text">
            <h3 className="heading-tertiary u-margin-bottom-small">
              Lagos City Tours
            </h3>
            <p>
              Get the true sense of being in Lagos and capture the feeling of
              nature and outdoor experiences. This tour captures the many
              potentials the aquatic city of Lagos has to offer.
            </p>
          </div>
        </div>
      </div>

      <div className="u-center-text u-margin-top-huge">
        <a href="#" className="btn-text">
          Read all stories &rarr;
        </a>
      </div>
    </section>
  );
}

export default Stories;
