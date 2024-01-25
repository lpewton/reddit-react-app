import React, { useEffect } from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";
import ROUTES from "./routes";

export default function AppLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    // Use useEffect to navigate to the home route when the component is rendered
    useEffect(() => {
        if (location.pathname === "/") {
            navigate(ROUTES.homeRoute());
        }
    }, [location.pathname, navigate]);
    
    return (
        <div>
            <header className="bg-gradient">
                <h2 className="text-center py-2">Reddit Archeo
                    <i className="fa-solid fa-person-digging"></i>
                    <i className="fa-solid fa-skull"></i></h2>
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
            <div id="content">
            <Outlet default = {ROUTES.homeRoute}/>
            </div>
            <footer className="bg-gradient"></footer>
        </div>
    );
}
