import React from "react";

function ActivityRadioButton({
  name,
  value,
  handleInputChange,
  formState,
  description,
  type,
}) {
  return (
    <li className="radio">
      <div className="radio__wrapper">
        <input
          type="radio"
          name={name}
          value={value}
          checked={formState.activity === name}
          onChange={handleInputChange}
          required
        />
        <label
          htmlFor={name}
          onClick={() => handleInputChange(null, type, name)}
        >
          {value}
        </label>
      </div>
      <p className="radio__description">{description}</p>
    </li>
  );
}

export default ActivityRadioButton;
