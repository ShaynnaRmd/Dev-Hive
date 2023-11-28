import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import React from "react";
import { Form } from "../components/Form";
import { isPasswordValid, isMailValid } from "../functions/checkPassword";
import styles from "../assets/css/Register.module.css";
import blobtop from "../assets/svg/blobtop.svg";
import blobmid from "../assets/svg/blobmid.svg";
import blobdown from "../assets/svg/blobdown.svg";
import blobtopy from "../assets/svg/blobtopyellow.svg";
import blobdowny from "../assets/svg/blobdownyellow.svg";
import yellowBook from "../assets/svg/yellowBook.svg";
import yellowLogo from "../assets/svg/yellowlogo.svg";
import purpleLogo from "../assets/svg/purplelogo.svg";

import book from "../assets/svg/book.svg";
import GoogleLogo from "../assets/svg/googlelogo.svg";
import AppleLogo from "../assets/svg/applelogo.svg";

export function Register() {
  const [inputValues, setInputValues] = useState([]);
  const [errorPassword, setErrorPassword] = useState(false);

  const [emailState, setEmailState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);

  const navigate = useNavigate();

  const formFields = [
    {
      type: "email",
      label: "Email",
      value: inputValues[0],
      placeholder: "williamsdoe@gmail.com",
    },
    {
      type: "password",
      label: "Mot de passe",
      value: inputValues[1],
      placeholder: "******",
    },
    {
      type: "password",
      label: "Confirmer mot de passe",
      value: inputValues[2],
      placeholder: "******",
    },
  ];

  const SendRegisterData = async (data) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const url = "https://prodev-ba4t.onrender.com/register";
      const response = await fetch(url, requestOptions);

      if (!response.ok) {
        throw new Error(
          `Échec de la requête avec le code d'état ${response.status}`
        );
      }

      const responseServer = await response.json();
      console.log("Requete réussie :", responseServer);
      if (responseServer.success) {
        navigate("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (data) => {
    console.log("something");
    if (isMailValid(data[0]) == false) {
      setEmailState(false);
      return;
    } else {
      setEmailState(true);
    }

    if (data[1] !== data[2]) {
      setErrorPassword(true);
      return;
    } else {
      setErrorPassword(false);
    }

    if (isPasswordValid(data[1]) == false) {
      setPasswordState(false);
      return;
    } else {
      setPasswordState(true);
    }

    const dataToSend = {
      email: data[0],
      password: data[1],
      confirmPassword: data[2],
    };
    SendRegisterData(dataToSend);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blobtop}>
        <img src={blobtop} alt="" style={{ fill: "#EADEA6" }} />
      </div>
      <div className={styles.blobmid}>
        <img src={blobmid} alt="" />
      </div>
      <div className={styles.blobdown}>
        <img src={blobdown} alt="" />
      </div>
      <div className={styles.logo}>
        <img src={purpleLogo} alt="" />
      </div>

      <div className={styles.containerform}>
        <div className={styles.containertop}>
          <div className={styles.top}>
            <div className={styles.topleft}>
              <h4>Inscrivez-vous</h4>
            </div>
            {/* <div
              className={styles.topright}
              style={{
                backgroundColor: "rgba(5, 0, 233, 0.1)",
                color: "#8200E9",
              }}
            >
              <img src={book} alt="Book Icon" />
              <p>Etudiant</p>
            </div> */}
          </div>
          <div className={styles.bottom}>
            <p>Vous completerez votre profile par la suite</p>
          </div>
        </div>
        <Form
          fields={formFields}
          onSubmit={handleFormSubmit}
          submitValue={"Inscription"}
        />
        {!passwordState && (
          <p style={{ color: "red" }}>
            Le mot de passe doit contenir, 8 caractères dont 1 majuscule, 1
            minuscule et 1 chiffre.
          </p>
        )}
        {errorPassword && (
          <p style={{ color: "red" }}>
            Les mots de passe ne correspondent pas.
          </p>
        )}
        {!emailState && <p style={{ color: "red" }}>Inserer un mail valide.</p>}
        <div className={styles.line}>
          <div className={styles.br}></div>
          <p>OR</p>
          <div className={styles.br}></div>
        </div>
        <div className={styles.connectwith}>
          <p>Se connecter avec :</p>
          <div className={styles.extraconnection}>
            <div className={styles.googleauth}>
              <div>
                <img src={GoogleLogo} alt="" />
              </div>
              <p>Google</p>
            </div>
            <div className={styles.appleauth}>
              <div>
                <img src={AppleLogo} alt="" />
              </div>
              <p>Apple</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
