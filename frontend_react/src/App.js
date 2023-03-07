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
      <Work />
      <Skills />
      <div className="app__divider" />
      <Footer />
    </div>
  );
};

export default App;
