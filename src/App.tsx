import React from "react";

import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import Footer from "./components/Footer/Footer";
import TestEffect from "./pages/TestEffect/TestEffect";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <div className="FooterTop">
        <Footer />
      </div>
      {/* -------------------------------------------------------------------------- */}
      {/* <TestEffect /> */}
    </div>
  );
}

export default App;
