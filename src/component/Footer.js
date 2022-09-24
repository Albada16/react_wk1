import '../compCss/Footer.css';

function Footer() {
  return (
    <div className="Footer">

        <div class="container">
            <div class="row">
                <div class="footer-col">
                    <h4>Policy</h4>
                    <ul>
                
             <li><a href="https://blocto.portto.io/en/privacy/"target="_blank" rel="noopener noreferrer"title="Privacy Policy">Privacy Policy</a></li>
             <li><a href="https://blocto.portto.io/en/terms"target="_blank" rel="noopener noreferrer" title="Terms of Use">Terms of Use</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Developer</h4>
                    <ul>
                        <li><a href="https://docs.blocto.app"target="_blank" rel="noopener noreferrer" title="Documents">Documents</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Support</h4>
                    <ul>
             <li><a href="mailto:support@blocto.app?subject=Blocto Support Request&amp;body=I need help with Blocto." title="Contact Us">Contact Us</a></li>
                    </ul>
                </div>
                   
             <div class="footer-col">
                    <h4>follow us</h4>
                    <div class="social-links">
             <a href="https://twitter.com/BloctoApp" target="_blank" rel="noopener noreferrer" title="Twitter"><i class="fab fa-twitter"></i></a>
              <a href="https://github.com/portto" target="_blank" rel="noopener noreferrer" title="GitHub"><i class="fab fa-github"></i></a>
             <a href="https://discord.gg/H34KZqF" target="_blank" rel="noopener noreferrer" title="Discord"><i class="fab fa-discord"></i></a>
             <a href="https://medium.com/portto" target="_blank" rel="noopener noreferrer" title="Medium"><i class="fab fa-medium"></i></a>
                        
                    </div>
                </div>           
                
             
                    </div>
            </div>
    </div>
  );
}

export default Footer;

