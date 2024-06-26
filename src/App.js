import React from "react";
import AppSelect from "./Routes/AppSelect";
import Calculate from "./Routes/Calculate";
import Output from "./Components/Calculator/Output";
import Inventory from "./Routes/Inventory";
import InventoryPhase from "./Components/Production/InventoryPhase";
import Footer from "./Components/Footer";
import LoginScreen from "./Routes/LoginScreen";
import AddProd from "./Routes/AddProd";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./Components/Utils/ErrorBoundary";
import KiloCalculate from "./Components/Calculator/KiloCalculate";
import Listing from "./Components/Production/Listing";

const App = () => {

  return (
    <>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              component={(props) => (
                <>
                  <LoginScreen
                    {...props}
                  />
                </>
              )}
            />
            <Route
              exact
              path="/AppSelect"
              component={(props) => <AppSelect {...props} />}
            />
            <Route
              exact
              path="/Calculate"
              component={(props) => <Calculate {...props} />}
            />
            <Route
              exact
              path="/Output"
              component={(props) => <Output {...props} />}
            />
            <Route
              exact
              path="/Inventory"
              component={(props) => <Inventory {...props}/>}
            />
            <Route
              exact
              path="/AddProd/:phase"
              component={(props) => <AddProd {...props} />}
            />
            <Route
              exact
              path="/Inventory/:phase"
              component={(props) => <InventoryPhase {...props} />}
            />
            <Route
              exact
              path="/KiloCalculate"
              component={(props) => <KiloCalculate {...props} />}
            />
            <Route
              exact
              path="/Listing/:color/:phase"
              component={(props) => <Listing {...props} />}
            />
          </Switch>
        </Router>
      </ErrorBoundary>
      <Footer />
    </>
  );
};

export default App;

//comment