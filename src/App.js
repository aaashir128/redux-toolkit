import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch as Switching,
  Route,
} from "react-router-dom";
import "./App.css";
import BasketPage from "./pages/BasketPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switching>
          <Route path="/basket">
            <BasketPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switching>
      </Router>
    </div>
  );
}

export default App;
