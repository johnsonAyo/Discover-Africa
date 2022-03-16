import Navigation from "./Navigation";
import Footer from "./Footer";
import { Link } from "react-router-dom";
function Register() {
  return (
    <>
      <section className="section-book">
        <Navigation />
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Register Now</h2>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full name
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email address"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email address
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="password"
                    className="form__input"
                    placeholder="Password"
                    id="password"
                    required
                  />
                  <label htmlFor="password" className="form__label">
                    Password
                  </label>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Confirm Password"
                    id="confirmPassword"
                    required
                  />
                  <label htmlFor="Confirm Password" className="form__label">
                    Confirm Password
                  </label>
                </div>

                <div className="form__group">
                  <button className="btnreg underline btn--green">
                    <Link to={"/dashboard"}>Proceed &rarr;</Link>
                  </button>
                  <button className="btnreg btn--green">
                    <Link to={"/"} className="underline">Go Back &rarr;</Link>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Register;
