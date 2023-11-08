import { useEffect, useState } from "react";
import RegisterForm from "../components/Register/RegisterForm";
import { useNavigate, useParams } from "react-router-dom";

export function Register() {
  const { type } = useParams();
  const status = type;
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const navigate = useNavigate();

  return (
    <>
      {status === "student" && (
        <div>
          <p>Bienvenue sur Dev Hive</p>
          <p>{data ? data.email : "Chargement"}</p>
          <RegisterForm />
          <p onClick={() => navigate("/register/compagny")}>
            S'inscrire en tant qu'entreprise
          </p>
        </div>
      )}

      {status === "compagny" && (
        <div>
          <p>Bienvenue sur Dev Hive</p>
          <RegisterForm />
          <div>
            <p onClick={() => navigate("/register/student")}>
              Tu es un etudiant ?
            </p>
          </div>
        </div>
      )}
    </>
  );
}
