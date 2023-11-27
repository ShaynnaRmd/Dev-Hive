import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { Form } from "../components/Form";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../components/Login/Login.module.css";
import blopTop from "../assets/svg/blobtop.svg";
export function Login() {
  const [inputValues, setInputValues] = useState([]);
  const { type } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        email: "yyyy",
        password: "yyyy",
      };

      try {
        const response = await fetch(
          "http://localhost:3000/users/createaccount",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error("Erreur lors de la requête fetch:", error);
      }
    };

    fetchData();
  }, []);
  // const data = {
  //   email: "Lucas",
  //   password: "lucas",
  // };

  // fetch("users/createaccount", data)
  //   .then((res) => res.json())
  //   .then((res) => console.log(res));
  const formFields = [
    { type: "email", label: "Email", value: inputValues[0] },
    { type: "password", label: "Mot de passe", value: inputValues[1] },
  ];

  const handleFormSubmit = (data) => {
    setInputValues(data);
  };

  return (
    <div className={styles.Form}>
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
      <div className={styles.conteneur}>
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
          <p onClick={() => navigate("/register/student")}>
            Pas encore incrit ?
          </p>
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
    </div>
  );
}
