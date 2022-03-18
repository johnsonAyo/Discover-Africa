import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

function Login() {
  return (
    <>
      <section className="section-book-login">
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
                  <button className="btnreg btn--white">
                    <Link to={"/"}>Go Back &rarr;</Link>
                  </button>
                  <button className="btnreg btn--white">
                    <Link to={"/Public"}>Proceed&rarr;</Link>
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

export default Login;
