import Animal from "./pages/Animal";
import Sport from "./pages/Sport";
import Travel from "./pages/Travel";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/animal">
        <Animal />
      </Route>
      <Route exact path="/sport">
        <Sport />
      </Route>
      <Route exact path="/travel">
        <Travel />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
