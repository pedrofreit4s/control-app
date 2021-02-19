import { HashRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Auth/login";

function Routes() {
  return (
    <Router basename="/">
      <Route exact path="/auth" component={Login} />
    </Router>
  );
}

export default Routes;
