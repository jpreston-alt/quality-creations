import React, { Suspense, lazy } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
const HomePage = lazy(() => import("../src/pages/HomePage"));
const AboutPage = lazy(() => import("../src/pages/AboutPage"));
const CareersPage = lazy(() => import("../src/pages/CareersPage"));
const FAQPage = lazy(() => import("../src/pages/FAQPage"));
const OurWorkPage = lazy(() => import("../src/pages/OurWorkPage"));
const ServicesPage = lazy(() => import("../src/pages/ServicesPage"));
const MobileMenu = lazy(() => import("../src/components/Navbar/MobileMenu"));
const ContactCanvas = lazy(() => import("../src/components/ContactCanvas"));
function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <div className="uk-position-center">
            <div uk-spinner="ratio: 4"></div>
          </div>
        }
      >
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
        <ContactCanvas />
      </Suspense>
    </Router>
  );
}

export default App;
