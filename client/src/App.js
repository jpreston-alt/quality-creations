import React from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../src/pages/HomePage";
import AboutPage from "../src/pages/AboutPage";
import CareersPage from "../src/pages/CareersPage";
import FAQPage from "../src/pages/FAQPage";
import OurWorkPage from "../src/pages/OurWorkPage";
import ServicesPage from "../src/pages/ServicesPage";
import MobileMenu from "../src/components/Navbar/MobileMenu";

function App() {
  return (
    < Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />;
        <Route exact path="/careers" component={CareersPage} />
        <Route exact path="/faq" component={FAQPage} />
        <Route exact path="/our-work" component={OurWorkPage} />
        <Route exact path="/services" component={ServicesPage} />
        {/* <Route component={NoMatch} /> */}
      </Switch>
      <MobileMenu />
      {/* <AboutCanvas /> */}
    </Router >
  );
}

export default App;
