import React from "react";
import "./assets/style.css";
import Header from "./component/Header";
import About from "./component/About";
import Experience from "./component/Experience";
import Education from "./component/Education";
import Skills from "./component/Skills";
import Navigation from "./component/Navigation";
import Footer from "./component/Footer";
import Gap from "./component/Gap";

function App() {
  return (
    <div className="app-container">
      <div className="cv-wrapper">
        <Header />
        <Navigation />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Gap height={80} />
        <Footer />
        <Gap />
      </div>
    </div>
  );
}

export default App;
