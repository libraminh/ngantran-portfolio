import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import "./App.css";
import { BackToTop } from "./components";
import { BlogPage, Main, ProjectPage } from "./pages";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import { routePaths } from "./router";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  // const { theme } = useContext(ThemeContext);

  // console.log(
  //   "%cDEVELOPER PORTFOLIO",
  //   `color:${theme.primary}; font-size:50px`
  // );
  // console.log(
  //   "%chttps://github.com/hhhrrrttt222111/developer-portfolio",
  //   `color:${theme.tertiary}; font-size:20px`
  // );
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path={routePaths.home} exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path={routePaths.projects} exact component={ProjectPage} />
          <Route path={routePaths.project} exact component={ProjectDetail} />

          <Redirect to={routePaths.home} />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
