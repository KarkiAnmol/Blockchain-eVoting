import React, { useContext } from "react";
import "./Input.css";

const Input = (inputType, title, placeholder, handleClick) => {
  return (
    <div className="input">
      <p>{title}</p>
      {inputType === "text" ? (
        <div className="input_box">
          <input
            inputType="text"
            title={title}
            className="input_box_form"
            placeholder={placeholder}
            onChange={handleClick}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
