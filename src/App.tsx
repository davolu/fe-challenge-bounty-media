import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Details } from "./pages";
import { Provider } from "react-redux";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:countryID" element={<Details />} />
      </Routes>
    </Router>
  );
};

export default App;
