import React from "react";
import "./style.css";

const Button = ({ 
  text, 
  onClick, 
  type = "button", 
  variant = "primary", 
  fullWidth = false 
}) => {
  return (
    <button 
      className={`btn ${variant} ${fullWidth ? "full-width" : ""}`} 
      onClick={onClick} 
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;