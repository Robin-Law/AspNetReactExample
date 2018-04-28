import React from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import { createBrowserHistory } from 'history';

createBrowserHistory({ basename: "/React" });

const RouterExample = () => (
  <Router>
    <div>
      <Link to="/React/">Home</Link>&nbsp;
      <Link to="/React/About">About</Link>&nbsp;
      <a href="/Legacy">Legacy</a>

      <hr />
      <Route exact path="/" component={Root} />
      <Route exact path="/React/" component={Home} />
      <Route path="/React/About" component={About} />
    </div>
  </Router>
);

const Root = () => (
  <Redirect to="/React/" />
)

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

export default RouterExample;
