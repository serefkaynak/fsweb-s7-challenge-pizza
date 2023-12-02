import React from "react";
import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import './App.css'
import HomePage from "./components/HomePage";
import OrderPage from "./components/OrderPage";
import OrderSuccess from "./components/OrderSuccess";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/order" component={OrderPage} />
          <Route exact path="/success" component={OrderSuccess} />
        </Switch>
      </Router>
    </>
  );
};

export default App;