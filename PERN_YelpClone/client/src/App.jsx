import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import UpdatePage from "./routes/UpdatePage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import { RestaurantsContextProvider } from "./context/RestaurantsContext";

const App = () => {
  return (
    // global variables of states
    <RestaurantsContextProvider>
      <div className="container">
        <Router>
          {/* This is a Switch statement. Router will only match first match and return */}
          <Routes>
            {/* each path goes to a /client/src/router page */}
            <Route exact path="/" Component={Home} />
            <Route
              exact
              path="/restaurants/:id/update"
              Component={UpdatePage}
            />
            <Route
              exact
              path="/restaurants/:id"
              Component={RestaurantDetailPage}
            />
          </Routes>
        </Router>
      </div>
    </RestaurantsContextProvider>
  );
};

export default App;
