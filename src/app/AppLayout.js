import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (
        <div>
            <header>
                <h3>Reddit Archeo</h3>
            <nav className="navBar">
                <ul className="navBar-ul">
                <li>
                    <NavLink to={ROUTES.homeRoute()} >
                    Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.favoritesRoute()} >
                    Favorites
                    </NavLink>
                </li>
                <li>
                    <NavLink to={ROUTES.notesRoute()} >
                    Notes
                    </NavLink>
                </li>
                </ul>
            </nav>
            </header>
            <Outlet/>
            <footer></footer>
        </div>
      

    );
}
