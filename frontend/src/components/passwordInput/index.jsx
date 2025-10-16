import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { IconContext } from "react-icons";

const PasswordInput = ({ label, value, onChange, name, placeholder }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="form-row">
      <label className="form-label">{label}</label>
      <div className="input-wrapper">
        <span className="input-icon">
          <IconContext.Provider value={{ size: "18px" }}>
            {/* lock icon via CSS background or another icon if needed */}
            🔒
          </IconContext.Provider>
        </span>
        <input
          className="form-input"
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        <button type="button" className="eye-btn" onClick={() => setVisible(!visible)} aria-label="toggle password">
          <IconContext.Provider value={{ size: "18px" }}>
            {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </IconContext.Provider>
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;