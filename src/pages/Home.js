import '../index.css';
import Nav from "../component/Nav"
import Header from "../component/Header"
import Hlight from "../component/Hlight"
import Footer from "../component/Footer"

function Home() {
  return (
    <div className="Home">
        <div className="wrapper">
            <Nav />
            <Header />
            <Hlight />
            <Footer />
        </div>
    </div>
  );
}

export default Home;

