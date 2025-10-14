import "../../styles/styles.css";
import NavPanel from "./NavPanel";

import { useState } from "react";

function NavBar() {
    const navs = ["Home", "Informasi", "PPDB", "PKL", "Blog", "Galeri", "Program Keahlian"];
    const [active, setActive] = useState("Home");

    return (
        <div className="navbar">
            <div className="navbar-header">
                <img src="/images/logo_smkrus.png" alt="Logo" className="nav-logo"/>
                <div className="nav-logo-text">
                    <h1>SEKOLAH MENENGAH KEJURUAN</h1>
                    <h1>RADEN UMAR SAID</h1>
                    <h1>KUDUS</h1>
                </div>
                
            </div>
            
            <NavPanel navs={navs} active={active} setActive={setActive}></NavPanel>
        </div>
    )
}

export default NavBar;