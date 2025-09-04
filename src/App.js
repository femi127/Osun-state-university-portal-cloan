import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeftPage from './components/LeftPage';
import RightPage from './components/RightPage';
import PasswordReset from './components/PasswordReset';
import PracticePage from './components/PracticePage';
import FullPage from './components/FullPage';
import HeaderIMG from './components/HeaderIMG';

function App() {
  return (
    <BrowserRouter basename="/Osun-state-university-portal-cloan">
      <Routes>
        <Route path="/" element={<FullPage />} />
        <Route path="/rightpage" element={<RightPage />} />
        <Route path="/leftpage" element={<LeftPage />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
        <Route path="/void" element={<PracticePage />} />
        <Route path="/mainIMG" element={<HeaderIMG />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
