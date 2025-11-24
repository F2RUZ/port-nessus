import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ConactPage from "./pages/ConactPage";
import LoginPage from "./pages/LoginPage";
import PortfolioPAge from "./pages/PortfolioPAge";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="flex flex-col justify-between h-[100vh]">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ConactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/portfolio" element={<PortfolioPAge />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
