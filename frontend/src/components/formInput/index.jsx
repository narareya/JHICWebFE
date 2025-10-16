import React from "react"; 
import { IconContext } from "react-icons";

const FormInput = ({ label, value, onChange, name, placeholder, type = "text", icon }) => {
  return (
    <div className="form-row">
      <label className="form-label">{label}</label>
      <div className="input-wrapper">
        <span className="input-icon">
          <IconContext.Provider value={{ size: "18px" }}>{icon}</IconContext.Provider>
        </span>
        <input
          className="form-input"
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default FormInput;