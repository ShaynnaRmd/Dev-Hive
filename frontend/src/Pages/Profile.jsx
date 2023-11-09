import { useEffect, useState } from "react";
import { Form } from "../components/Form";

export function Profile() {
  const [inputValues, setInputValues] = useState([]);

  const formFields = [
    { type: "text", label: "Prénom", value: inputValues[0] },
    { type: "text", label: "Nom", value: inputValues[1] },
    { type: "number", label: "Age", value: inputValues[2] },
    {
      type: "date",
      label: "Date de naissance",
      value: inputValues[3],
    },
  ];

  const handleFormSubmit = (data) => {
    // e.preventDefault();
    console.log(data);
    setInputValues(data);
  };
  return (
    <>
      <p>On aimerait en savoir plus sur Toi !</p>
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitValue={"Send"}
      />
    </>
  );
}
