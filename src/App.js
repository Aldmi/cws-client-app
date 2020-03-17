import React, { Suspense, lazy } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

const DeviceOption = lazy(() => import("./components/deviceOptionComponents/DeviceOption"));
const About = lazy(() => import("./components/About"));

export default function App() {
  return (
    <div className="App">
     <CssBaseline />
      <Nav/>
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
