import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Form } from "../components/Form";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../assets/css/Register.module.css";

export function Login() {
  const [inputValues, setInputValues] = useState([]);
  const { type } = useParams();
  const navigate = useNavigate();

  const data = {
    username: "Lucas",
    password: "lucas",
  };

  fetch("http://localhost:3000/users/createaccount", data)
    .then((response) => response.json())
    .then((res) => console.log(res));
  const formFields = [
    { type: "email", label: "Email", value: inputValues[0] },
    { type: "password", label: "Mot de passe", value: inputValues[1] },
  ];

  const handleFormSubmit = (data) => {
    setInputValues(data);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bloptop}>
        <img src={blopTop} alt="" />
      </div>
      {/* <div className={styles.blopmid}>
        <img src={blopMid} alt="blob-mid" />
      </div>
      <div className={styles.blopdown}>
        <img src={blopDown} alt="blob-mid" />
      </div> */}
      {/* <div>
        <img src={blopDown} alt="blob-down" />
      </div> */}

      {type === "student" && <h4>Connexion en tant qu'étudiant</h4>}
      {type === "compagny" && <h4>Connexion en tant qu'entreprise</h4>}

      {/* <GoogleLogin
        onSuccess={(credentialResponse) => {
          let response = jwtDecode(credentialResponse.credential);
          //Ajouter response comme token à la bdd ainsi qu'au cookies, à chaque page vrifier si le cookie = celui de bdd, au logout supprimé cookie
          console.log(response);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      /> */}
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitValue={"Connexion"}
      />
      {type === "student" && (
        <p onClick={() => navigate("/register/student")}>Pas encore incrit ?</p>
      )}
      {type === "compagny" && (
        <p onClick={() => navigate("/register/compagny")}>
          Pas encore incrit ?
        </p>
      )}
      {type === "student" && (
        <p onClick={() => navigate("/login/compagny")}>
          Vous êtes une entreprise ?
        </p>
      )}
      {type === "compagny" && (
        <p onClick={() => navigate("/login/student")}>
          Vous êtes un étudiant ?
        </p>
      )}
    </div>
  );
}
