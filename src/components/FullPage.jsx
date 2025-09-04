import RightPage from "./RightPage";
import LeftPage from "./LeftPage";
import HeaderIMG from "./HeaderIMG";
import Footer from "./Footer";
import '../App.css';

function FullPage() {
  return (
    <div className="App">
      <HeaderIMG />
      <div className="secondApp">
        <LeftPage />
        <RightPage />
      </div>
      <Footer />
    </div>
  );
}

export default FullPage;