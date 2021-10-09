import Animal from "./pages/Animal";
import Sport from "./pages/Sport";
import Travel from "./pages/Travel";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
