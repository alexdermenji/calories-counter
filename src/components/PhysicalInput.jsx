import React from "react";

function PhysicalInput({
  value,
  name,
  id,
  values,
  handleInputChange,
  formState,
  type,
}) {
  return (
    <div className="input">
      <div className="input__heading">
        <label className="heading" htmlFor="age">
          {value}
        </label>
        <span className="input__heading-unit">{values}</span>
      </div>
      <div className="input__wrapper">
        <input
          onChange={(ev) => handleInputChange(ev, type)}
          value={formState[name]}
          type="text"
          id={id}
          placeholder="0"
          inputMode="decimal"
          maxLength="3"
          required
        />
      </div>
    </div>
  );
}

export default PhysicalInput;
