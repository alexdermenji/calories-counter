import React from "react";
import SexTab from "./SexTab";
import { genderValues } from "../data/data";

function Sex({ handleInputChange, formState }) {
  return (
    <div className="form__item">
      <h2 className="heading">Sex</h2>
      <ul className="switcher">
        {genderValues.map((item) => (
          <SexTab
            key={item.id}
            handleInputChange={handleInputChange}
            isChecked={formState.gender === item.gender}
            {...item}
          />
        ))}
      </ul>
    </div>
  );
}

export default Sex;
