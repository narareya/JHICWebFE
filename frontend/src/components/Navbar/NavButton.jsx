import "../../styles/styles.css";

function NavButton ({label, isActive, onClick}) {
    return(
        <button 
        className={`nav-button ${isActive ? "active" : ""}`}
        onClick={onClick}>
            {label}
        </button>
    )
}

export default NavButton;