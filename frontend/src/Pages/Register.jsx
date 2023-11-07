import { useState } from "react";

export function Register() {
  const [status, setStatus] = useState("undefined");

  return (
    <>
      <h1>Register</h1>
      {status === "undefined" && (
        <div>
          <p>Etes-vous un étudiant ou une entreprise ?</p>
          <div>
            <button onClick={() => setStatus("student")}>Etudiant</button>
          </div>
          <div>
            <button onClick={() => setStatus("compagny")}>Entreprise</button>
          </div>
        </div>
      )}

      {status === "student" && (
        <div>
          <p>Bienvenue jeune étudiant</p>
          <div>
            <p onClick={() => setStatus("compagny")}>Tu es une entreprise ?</p>
          </div>
        </div>
      )}

      {status === "compagny" && (
        <div>
          <p>Bienvenue sur DevHunt</p>
          <div>
            <p onClick={() => setStatus("student")}>Tu es un etudiant ?</p>
          </div>
        </div>
      )}
    </>
  );
}
