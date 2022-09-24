import '../compCss/Nav.css';

function Nav() {
  return (
    <div className="Nav">
            <li>
                <a className="title" href="#token_sec">TOKEN</a>
                <div className="bline"></div>
              </li>
            <li>
              <a className="title" href="#bounty_sec">BOUNTY</a>
              <div className="bline"></div>
            </li>
            <li>
              <a className="title" href="#wallet_sec">WALLET</a>
              <div className="bline"></div>
            </li>
            <li>
              <a className="title" href="#team_sec">TEAM</a>
              <div className="bline"></div>
            </li>
            <li>
                <a className="title" href="https://twitter.com/BloctoApp">SOCIAL</a>
                <div className="bline"></div>
              </li>
    </div>
  );
}

export default Nav;

