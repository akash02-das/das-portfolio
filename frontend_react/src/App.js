import React from "react";

import "./App.scss";
import { Navbar } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Footer />
      <Skills />
      <Work />
    </div>
  );
};

export default App;
