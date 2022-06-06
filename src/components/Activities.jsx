import React from "react";
import { activityValues } from "../data/data";
import ActivityRadioButton from "./ActivityRadioButton";

function Activities({ handleInputChange, formState }) {
  return (
    <fieldset className="form__item">
      <legend className="heading">Физическая активность</legend>
      <ul className="radios-group">
        {activityValues.map((props) => (
          <ActivityRadioButton
            key={props.id}
            formState={formState}
            handleInputChange={handleInputChange}
            {...props}
          />
        ))}
      </ul>
    </fieldset>
  );
}

export default Activities;
