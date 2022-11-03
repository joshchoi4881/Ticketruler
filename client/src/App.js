import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layouts/Header";
import Dashboard from "./components/pages/Dashboard";
import Show from "./components/pages/Show";
import Contact from "./components/pages/Contact";
import NotFound from "./components/pages/NotFound";
import Footer from "./components/layouts/Footer";
import "./styles/App.css";
import "./styles/Fantero.css";

const App = () => {
  return (
    <div className="page">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/show/:showId" element={<Show />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/404" element={<NotFound />}></Route>
            <Route
              path="*"
              element={<Navigate to="/404" replace={true} />}
            ></Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
