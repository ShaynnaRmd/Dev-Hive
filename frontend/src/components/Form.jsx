import { Input } from "./Input";
import { useState } from "react";
import styles from "../components/Form.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";

export function Form({ fields, onSubmit, submitValue, status }) {
  const [inputValues, setInputValues] = useState([]);
  const navigate = useNavigate();
  const handleInputChange = (index, value) => {
    const newValues = [...inputValues];
    newValues[index] = value;
    setInputValues(newValues);
  };

  const SubmitForm = (e) => {
    e.preventDefault();
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
            placeholder={el.placeholder}
            onChange={(value) => handleInputChange(index, value)}
          />
        ))}
        <div className={styles.links}>
          <p onClick={() => navigate("/login")}>Déjà un compte ?</p>
          {status == "registerStudent" && (
            <p onClick={() => navigate("/register/compagny")}>
              S'inscrire en tant qu'entreprise
            </p>
          )}
          {status == "registerCompagny" && (
            <p onClick={() => navigate("/register/student")}>
              S'inscrire en tant qu'étudiant
            </p>
          )}
        </div>
        <input
          type="submit"
          value={submitValue}
          className={styles.submit}
          style={
            status === "registerCompagny"
              ? { backgroundColor: "#28A708" }
              : { backgroundColor: "#8200E9" }
          }
        />
      </form>
    </>
  );
}
