import React from "react";

import "./App.css";
import Header from "./components/Layout/Header";
import Navbar from "./components/Layout/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <React.Fragment>
      <header className="header">
        <Navbar />
        <Header />
      </header>
      <About />
      <Services />
      <Blog />
      <Footer />
    </React.Fragment>
  );
};

export default App;
