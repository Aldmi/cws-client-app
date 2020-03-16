import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

const DeviceOption = lazy(() => import("./components/deviceOptionComponents/DeviceOption"));
const About = lazy(() => import("./components/About"));

export default function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={DeviceOption} />
            <Route path="/about" component={About} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}
