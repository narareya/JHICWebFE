import "../../styles/styles.css";
import NavPanel from "./NavPanel";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
    // Mapping menu ke route
    const navRoutes = {
        "Home": "/",
        "Informasi": "/informasi",
        "PPDB": "/ppdb",
        "PKL": "/pkl",
        "Blog": "/blog",
        "Galeri": "/gallery",
        "Program Keahlian": "/program-keahlian"
    };

    const navs = ["Home", "Informasi", "PPDB", "PKL", "Blog", "Galeri", "Program Keahlian"];
    const navigate = useNavigate();
    const location = useLocation();
    const [active, setActive] = useState("Home");

    // Update active state berdasarkan current route
    useEffect(() => {
        const currentRoute = location.pathname;
        const currentNav = Object.keys(navRoutes).find(key => navRoutes[key] === currentRoute);
        if (currentNav) {
            setActive(currentNav);
        }
    }, [location.pathname]);

    const handleNavClick = (navItem) => {
        setActive(navItem);
        const route = navRoutes[navItem];
        if (route) {
            navigate(route);
        }
    };

    return (
        <div className="navbar">
            <div className="navbar-header">
                <img src="/images/logo_smkrus.png" alt="Logo SMK Raden Umar Said" className="nav-logo"/>
                <div className="nav-logo-text">
                    <h1>SEKOLAH MENENGAH KEJURUAN</h1>
                    <h1>RADEN UMAR SAID</h1>
                    <h1>KUDUS</h1>
                </div>
            </div>
            
            <NavPanel navs={navs} active={active} onNavClick={handleNavClick} />
        </div>
    )
}

export default NavBar;