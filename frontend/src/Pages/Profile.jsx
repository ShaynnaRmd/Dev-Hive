import { useEffect, useState } from "react";
import { Form } from "../components/Form";

export default function Profile() {
  const [inputValues, setInputValues] = useState([]);

  const formFields = [
    { type: "text", label: "Prénom", value: inputValues[0], onChange: "" },
    { type: "text", label: "Nom", value: inputValues[1], onChange: "" },
    { type: "number", label: "Age", value: inputValues[2], onChange: "" },
    {
      type: "date",
      label: "Date de naissance",
      value: inputValues[3],
      onChange: "",
    },
  ];

  const handleFormSubmit = (data, submitValue) => {
    // e.preventDefault();
    console.log(data, submitValue);
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
