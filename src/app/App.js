import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import logo from '../logo.svg';
import './App.css';
import AppLayout from "./AppLayout";
import Home from '../features/home/home';
import Favorites from '../features/favorites/favorites';
import Notes from '../features/notes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="notes" element={<Notes />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
