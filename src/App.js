import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import DeviceOption from "./components/DeviceOption"
import About from "./components/About"
import Header from "./components/Header"

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header />
          <main>
            <Switch>
              <Route path="/About" component={About} />
              <Route path="/" component={DeviceOption} />
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}



