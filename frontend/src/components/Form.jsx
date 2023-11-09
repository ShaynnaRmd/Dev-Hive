import { Input } from "./Input";
import { useState } from "react";

export function Form({ fields, onSubmit, submitValue }) {
  const [inputValues, setInputValues] = useState([]);

  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    onSubmit(inputValues);
  };

  return (
    <>
      <form action="" onSubmit={SubmitForm}>
        {fields.map((el, index) => (
          <Input
            key={index}
            label={el.label}
            type={el.type}
            value={el.value}
            onChange={(value) => handleInputChange(index, value)}
          />
        ))}
        <input type="submit" value={submitValue} />
      </form>
    </>
  );
}
