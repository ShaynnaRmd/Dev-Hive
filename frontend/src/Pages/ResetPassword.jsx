import React from "react";
import { Form } from "../components/Form";
import { useState } from "react";
import styles from "../assets/css/ResetPassword.module.css";
import { useParams } from "react-router-dom";

export default function ResetPassword() {
  const [inputValues, setInputValues] = useState([]);
  const { id } = useParams();
  const formFields = [
    {
      type: "password",
      label: "Nouveau mot de passe",
      value: inputValues[0],
      placeholder: "******",
    },
    {
      type: "password",
      label: "Confirmer le mot de passe",
      value: inputValues[1],
      placeholder: "******",
    },
  ];

  const SendNewPassword = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const url = `https://prodev-ba4t.onrender.com/resetPassword/${id}`;
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `Échec de la requête avec le code d'état ${response.status}`
        );
      }

      const responseServer = await response.json();
      console.log("Requete réussie :", responseServer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    if (data[0] === data[1]) {
      const sendData = {
        password: data[0],
        confirmPassword: data[1],
      };
      SendNewPassword(sendData);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerform}>
        <div className={styles.title}>
          <h2>Mot de passe oublié</h2>
        </div>
        <Form fields={formFields} onSubmit={handleFormSubmit} />
      </div>
    </div>
  );
}
