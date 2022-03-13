import Footer from "./Footer";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Login() {
  return (
    <>
      <section className="section-book">
        <Navigation />
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-bottom-medium">
                  <h2 className="heading-secondary">Login</h2>
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
                  <button className="btn btn--green">Login &rarr;</button>
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

export default Login;
