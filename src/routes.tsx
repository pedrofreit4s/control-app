import { HashRouter as Router, Route } from "react-router-dom";
import Activate from "./pages/Auth/activate";
import Login from "./pages/Auth/login";
import Register from "./pages/Auth/register";
import Dashboard from "./pages/Dashboard";

function Routes() {
  return (
    <Router basename="/">
      <Route exact path="/auth" component={Login} />
      <Route exact path="/auth/create-account" component={Register} />
      <Route exact path="/auth/activate/:token" component={Activate} />

      <Route exact path="/" component={Dashboard} />
    </Router>
  );
}

export default Routes;
