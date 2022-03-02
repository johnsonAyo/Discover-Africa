
import './App.css';

function App() {
  return (
   <div>
      <title>Travel stories | Exciting tours for adventurous people</title>

      <header className="header">
            <div className="header__logo-box">
                <img src="img/logo-white.png" alt="Logo" className="header__logo" />
            </div>

            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Travelogs</span>
                    <span className="heading-primary--sub">Document your Memories</span>
                </h1>

                <a href="#section-tours" className="btn btn--white btn--animated">Post Your Travel Stories</a>
            </div>
        </header>

   </div>
  );
}

export default App;
