import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import React, { useState } from "react";

import CardContainer from "./components/CardContainer";

export default function Album() {
  const [seed, setSeed] = useState("evan");

  return (
    <React.Fragment>
      <Header setSeed={setSeed} />
      <main>
        <Hero />
        <CardContainer seed={seed} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
