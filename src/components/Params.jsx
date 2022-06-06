import React from "react";
import PhysicalInput from "./PhysicalInput";
import { physicalValues } from "../data/data";

function Params({ handleInputChange, formState }) {
  return (
    <fieldset className="form__item form__parameters" name="parameters">
      <legend className="visually-hidden">Physical Parametres</legend>
      <div className="inputs-group">
        {physicalValues.map((item) => (
          <PhysicalInput
            handleInputChange={handleInputChange}
            formState={formState}
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </fieldset>
  );
}

export default Params;
