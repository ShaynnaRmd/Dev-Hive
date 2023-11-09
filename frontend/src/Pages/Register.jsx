import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { Form } from "../components/Form";
import { isPasswordValid, isMailValid } from "../functions/checkPassword";

export function Register() {
  const { type } = useParams();
  const [inputValues, setInputValues] = useState([]);
  const [errorPassword, setErrorPassword] = useState(false);

  const [emailState, setEmailState] = useState(true);
  const [passwordState, setPasswordState] = useState(true);

  const navigate = useNavigate();

  const formFields = [
    { type: "email", label: "Email", value: inputValues[0] },
    { type: "password", label: "Mot de passe", value: inputValues[1] },
    {
      type: "password",
      label: "Confirmer mot de passe",
      value: inputValues[2],
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
    <>
      {type === "compagny" && <p>Salut jeune entreprise</p>}
      {type === "student" && <p>Salut jeune étudiant</p>}
      <Form
        fields={formFields}
        onSubmit={handleFormSubmit}
        submitValue={"Inscription"}
      />
      {!passwordState && (
        <p>
          Le mot de passe doit contenir 1 majuscule, 1 minuscule, 1 caractère
          spéciale et 1 chiffre.
        </p>
      )}
      {errorPassword && <p>Les mots de passe ne correspondent pas.</p>}
      {!emailState && <p>Inserer un mail valide.</p>}
      {type === "compagny" && (
        <>
          <p onClick={() => navigate("/register/student")}>
            Se connecter en tant qu'étudiant ?
          </p>
          <p onClick={() => navigate("/login/compagny")}>Déjà un compte ?</p>
        </>
      )}
      {type === "student" && (
        <>
          <p onClick={() => navigate("/register/compagny")}>
            Se connecter en tant qu'entreprise ?
          </p>
          <p onClick={() => navigate("/login/student")}>Déjà un compte ?</p>
        </>
      )}
    </>
  );
}
