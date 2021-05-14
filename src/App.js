import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React from "react";

import CardContainer from "./components/CardContainer";

export default function Album() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Hero />
        <CardContainer />
      </main>
      <Footer />
    </React.Fragment>
  );
}
