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
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import ProjectDetail from "./pages/ProjectDetail/ProjectDetail";
import { routePaths } from "./router";
import ScrollToTop from "./utils/ScrollToTop";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path={routePaths.home} exact component={Main} />
          <Route path={routePaths.blog} exact component={BlogPage} />
          <Route path={routePaths.blogDetail} exact component={BlogDetail} />
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
