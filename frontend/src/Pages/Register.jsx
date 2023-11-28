import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Form } from "../components/Form";
import { isPasswordValid, isMailValid } from "../functions/checkPassword";
import styles from "../assets/css/Register.module.css";
import blobtop from "../assets/svg/blobtop.svg";
import blobmid from "../assets/svg/blobmid.svg";
import blobdown from "../assets/svg/blobdown.svg";
import book from "../assets/svg/book.svg";

export function Register() {
  const { type } = useParams();
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
      placeholder: "johndoe@gmail.com",
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

  const handleFormSubmit = (data) => {
    setInputValues(data);
    console.log(data);
    console.log(inputValues);
    // setEmailState(isMailValid(data[0]));
    // data[1] !== data[2] ? setErrorPassword(true) : undefined;

    // if (isPasswordValid(data[1])) {
    //   setPasswordState(true);
    // } else {
    //   setPasswordState(false);
    // }
  };

  return (
    <div className={styles.container}>
      <div className={styles.blobtop}>
        <img src={blobtop} alt="" />
      </div>
      <div className={styles.blobmid}>
        <img src={blobmid} alt="" />
      </div>
      <div className={styles.blobdown}>
        <img src={blobdown} alt="" />
      </div>
      <div className={styles.containerform}>
        <div className={styles.containertop}>
          <div className={styles.top}>
            <div className={styles.topleft}>
              <h4>Inscrivez-vous</h4>
            </div>
            <div className={styles.topright}>
              <img src={book} alt="Book Icon" />
              <p>{type === "student" ? "Etudiant" : "Entreprise"}</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <p>Vous completerez votre profile par ma suite</p>
          </div>
        </div>
        <Form
          fields={formFields}
          onSubmit={handleFormSubmit}
          submitValue={"Inscription"}
          status={type == "student" ? "registerStudent" : "registerCompagny"}
        />
        {!passwordState && (
          <p>
            Le mot de passe doit contenir 1 majuscule, 1 minuscule, 1 caractère
            spéciale et 1 chiffre.
          </p>
        )}
        {errorPassword && <p>Les mots de passe ne correspondent pas.</p>}
        {!emailState && <p>Inserer un mail valide.</p>}
        <div className={styles.line}>
          <div className={styles.br}></div>
          <p>OR</p>
          <div className={styles.br}></div>
        </div>
        <div className={styles.connectwith}>
          <p>Se connecter avec :</p>
        </div>
      </div>
    </div>
  );
}
