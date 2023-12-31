import logo from '../logo.svg';
import './App.css';
import AppLayout from "./AppLayout";

import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
