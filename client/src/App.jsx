import React from "react";
import Mainpage from "./pages/Mainpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import RareRabitProject from "./pages/projectPages/RareRabitProject";
import BurgerPage from "./pages/projectPages/BurgerPage";
import KaderkarPage from "./pages/projectPages/KaderkarPage";
import StaryProject from "./pages/projectPages/StaryProject";
import VijetaPage from "./pages/projectPages/VijetaPage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import RedyBrothersPage from "./pages/projectPages/RedyBrothersPage";
import ScrollToTop from "./components/ScrollToTop";
AOS.init();

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/rare" element={<RareRabitProject />} />

          <Route path="/burger" element={<BurgerPage />} />
          <Route path="/kader" element={<KaderkarPage />} />
          <Route path="/vijeta" element={<VijetaPage />} />
          <Route path="/stary" element={<StaryProject />} />
          <Route path="/reddy" element={<RedyBrothersPage />} />
          <Route path="/pk" element={<RareRabitProject />} />

          <Route path="/" element={<Mainpage />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
