import { Route, Router, Routes } from "@solidjs/router";
import Home from "./views/Home";
import Location from "./views/Location";

const App = () => {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/location/:id" component={Location} />
    </Routes>
  );
};

export default App;
