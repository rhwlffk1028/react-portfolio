import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact"
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Router>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </Router>
      <Footer />
    </div>
  );
}

export default App;
