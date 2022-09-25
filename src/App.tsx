import { Component, lazy } from "solid-js";
import { Router, Route } from "solid-app-router";

const routes = [
  {
    path: "/",
    component: lazy(() => import("./views/Home")),
  },
];

const App: Component = () => {
  return (
    <Router routes={routes}>
      <Route />
    </Router>
  );
};

export default App;
