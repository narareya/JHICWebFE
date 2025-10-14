import "../../styles/styles.css";
import NavButton from "./NavButton";

function NavPanel({ navs, active, onNavClick }) {
  return (
    <div className="nav-panel">
      {navs.map((nav) => (
        <NavButton
          key={nav}
          label={nav}
          isActive={active === nav}
          onClick={() => onNavClick(nav)}
        />
      ))}
    </div>
  );
}

export default NavPanel;
