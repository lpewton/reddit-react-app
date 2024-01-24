import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    return (
        <div>
            <header className="bg-gradient">
                <h2 className="text-center py-2">Reddit Archeo</h2>
                <nav className="navBar pb-2 border-top border-dark">
                    <ul className="navBar-ul h4 decoration-none m-0 d-flex justify-content-around">
                        <li className="nav-link text-dark decoration-none">
                            <NavLink to={ROUTES.homeRoute()} >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-link">
                            <NavLink to={ROUTES.favoritesRoute()} >
                                Favorites
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer className="bg-gradient"></footer>
        </div>
    );
}
