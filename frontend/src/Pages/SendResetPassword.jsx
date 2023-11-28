import React from "react";
import { Form } from "../components/Form";
import { useState } from "react";
import styles from "../assets/css/ResetPassword.module.css";

export default function SendResetPassword() {
  const [inputValues, setInputValues] = useState([]);
  const [isSend, setIsSend] = useState(false);
  const formFields = [
    {
      type: "email",
      label: "Votre email",
      value: inputValues[0],
      placeholder: "johndoe@gmail.com",
    },
    {
      type: "email",
      label: "Coinfirmer votre email",
      value: inputValues[1],
      placeholder: "johndoe@gmail.com",
    },
  ];

  const SendData = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const url = "https://prodev-ba4t.onrender.com/forgotPassword";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `Échec de la requête avec le code d'état ${response.status}`
        );
      }

      const responseServer = await response.json();
      console.log("Requete réussie :", responseServer);
      if (responseServer.success) {
        setIsSend(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (data) => {
    if (data[0] === data[1]) {
      const sendData = {
        email: data[0],
      };
      SendData(sendData);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerform}>
        <div className={styles.title}>
          <h2>Mot de passe oublié</h2>
        </div>
        <Form fields={formFields} onSubmit={handleFormSubmit} />
        {isSend && (
          <p style={{ color: "red" }}>
            Un mail contenant un lien vous a été envoyé
          </p>
        )}
      </div>
    </div>
  );
}
