import "../../styles/styles.css";

import NavButton from "./NavButton";

function NavPanel({navs, active, setActive}) {
    return(
        <div>
            {navs.map((nav) => (
                <NavButton
                    key={nav}
                    label={nav}
                    isActive={active === nav}
                    onClick={() => setActive(nav)}
                />
            ))}
        </div>
    )
}

export default NavPanel;