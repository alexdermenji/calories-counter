import React from "react";

function SexTab({ value, id, gender, handleInputChange, isChecked, type }) {
  return (
    <li className="switcher__item">
      <input
        id={id}
        name="gender"
        value={gender}
        type="radio"
        checked={isChecked}
        onChange={() => {}}
        required
      />
      <label
        onClick={() => handleInputChange(null, type, gender)}
        htmlFor={gender}
      >
        {value}
      </label>
    </li>
  );
}

export default SexTab;
