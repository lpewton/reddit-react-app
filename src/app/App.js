import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

import './App.css';
import AppLayout from "./AppLayout";
import Home from '../features/home/home';
import Favorites from '../features/favorites/favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="home" element={<Home />}/>
          <Route path="favorites" element={<Favorites />}/>
          <Route path="favorites/new" element={<addFavorite />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
