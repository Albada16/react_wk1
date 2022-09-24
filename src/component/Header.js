import '../compCss/Header.css';

function Header() {
  return (
    <div className="Header">
        <div className="header_min">
          <div className="blt">
            <img src="img/Group 3@2x.png" alt="" className="blocto" />
          </div>
          <img src="img/Group 299@2x.png"  className="city" />
          <div className="arrow" id="arrow"></div>
        </div>
    </div>
  );
}

export default Header;

