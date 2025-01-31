import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./code-pages/components/Header";
import Footer from "./code-pages/components/Footer";
import Authorization from "./pages/Authorization";
import Home from "./pages/Home";
import ProgranExchange from "./pages/ProgranExchange";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Authorization" element={<Authorization />} />
          <Route path="/progranExchange" element={<ProgranExchange />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
