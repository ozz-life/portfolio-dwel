const Footer = () => {
  return (
    <>
      <div className="container">
        <footer className="footer">
          <div className="grid-a">
            <p>© DWEL</p>
            <p>
              Powered by <a href="#">Webflow</a>
            </p>
          </div>
          <div className="grid-b">
            <div className="grid-b__menu-partN">
              <ul className="grid-b__menu__list">
                <li>
                  <a href="#">Passwords</a>
                </li>
                <li>
                  <a href="#">404</a>
                </li>
              </ul>
            </div>
            <div className="grid-b__menu-partN">
              <ul className="grid-b__menu__list">
                <li>
                  <a href="#">Licenses</a>
                </li>
                <li>
                  <a href="#">Style Guide</a>
                </li>
                <li>
                  <a href="#">Changelog</a>
                </li>
              </ul>
            </div>
            <div className="grid-b__menu-partN">
              <ul className="grid-b__menu__list">
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
