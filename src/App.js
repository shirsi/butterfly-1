import React from "react";
import New from "./components/New.js";
import Signup from "./components/Signup";
import Signin from "./components/Signin.js";
import Home from "./components/Home.js";
import Navigation from "./components/Navigation.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
/*
********************************************************
          Define
********************************************************
*/
let baseURL = process.env.REACT_APP_BASEURL;

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003";
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Navigation />
        <div className="main">
          <Route path="/" exact component={Home} />
          <Route
            path="/newpost"
            render={props => <New {...props} baseURL={baseURL} />}
          />
          <Route
            path="/login"
            render={props => <Signin {...props} baseURL={baseURL} />}
          />
          <Route
            path="/signup"
            render={props => <Signup {...props} baseURL={baseURL} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
