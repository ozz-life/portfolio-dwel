const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header">
          <div className="header__logo">DWEL®</div>

          <menu className="header__menu">
            <li className="header__menu-li">
              <a className="header__menu-a" href="#">
                Projects
              </a>
            </li>
            <li className="header__menu-li">
              <a className="header__menu-a" href="#">
                Info
              </a>
            </li>
          </menu>
        </header>
      </div>
    </>
  );
};

export default Header;
