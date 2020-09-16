import React, { Suspense, lazy, useState, useEffect } from "react";
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
  const [loading, setLoading] = useState(false);
  // var obj = `${(
  //   <div class="spinner-bg">
  //     <div class="bar">
  //       <div class="circle"></div>
  //       <p>Loading</p>
  //     </div>
  //   </div>
  // )}`;

  useEffect(() => {
    switch (document.readyState) {
      case "loading":
        setLoading(true);
      case "interactive":
        setLoading(true);
      case "complete":
        setTimeout(() => {
          setLoading(false);
        }, 2300);

      default:
        setTimeout(() => {
          setLoading(false);
        }, 2300);
    }
  }, [document.readyState]);

  return (
    <Router>
      <Suspense
        fallback={
          <div class="uk-position-center">
            <div uk-spinner="true"></div>
          </div>
        }
      >
        <Switch>
          {}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/" component={HomePage} />
          )}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/about" component={AboutPage} />
          )}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/careers" component={CareersPage} />
          )}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/faq" component={FAQPage} />
          )}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/our-work" component={OurWorkPage} />
          )}
          {loading ? (
            <div class="spinner-bg">
              <div class="bar">
                <div class="circle"></div>
                <p>Loading</p>
              </div>
            </div>
          ) : (
            <Route exact path="/services" component={ServicesPage} />
          )}
          {/* <Route component={NoMatch} /> */}
        </Switch>

        <MobileMenu />
        <ContactCanvas />
      </Suspense>
    </Router>
  );
}

export default App;
