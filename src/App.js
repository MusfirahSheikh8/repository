import "./App.css";
// import About from "./component/About";
import Navbar from "./component/Navbar";
import Text from "./component/Text";
import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Route } from "react-router-dom/cjs/react-router-dom.min";
function App() {
  return (
    <>
      {/* <Router> */}
      <Navbar title="ReactMagic" />
      <div className="container" my-3="true">
        {/* <Switch>
            <Route path="/about">
              <About />
            </Route> */}
        {/* <Route path="/"> */}
        <Text heading="Enter your text below" />
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
