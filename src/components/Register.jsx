import Navigation from "./../components/Navigation"
import Footer from "./../components/Footer"
function Register() {
  return (
    <><section class="section-book">
      <Navigation />
      <div class="row">
        <div class="book">
          <div class="book__form">
            <form action="#" class="form">
              <div class="u-margin-bottom-medium">
                <h2 class="heading-secondary">Register Now</h2>
              </div>

              <div class="form__group">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Full name"
                  id="name"
                  required />
                <label for="name" class="form__label">
                  Full name
                </label>
              </div>

              <div class="form__group">
                <input
                  type="email"
                  class="form__input"
                  placeholder="Email address"
                  id="email"
                  required />
                <label for="email" class="form__label">
                  Email address
                </label>
              </div>

              <div class="form__group">
                <input
                  type="password"
                  class="form__input"
                  placeholder="Password"
                  id="password"
                  required />
                <label for="password" class="form__label">
                  Password
                </label>
              </div>

              <div class="form__group">
                <input
                  type="text"
                  class="form__input"
                  placeholder="Confirm Password"
                  id="confirmPassword"
                  required />
                <label for="Confirm Password" class="form__label">
                  Confirm Password
                </label>
              </div>

              <div class="form__group">
                <button class="btn btn--green">Proceed &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section><Footer /></>
  );
}

export default Register;
