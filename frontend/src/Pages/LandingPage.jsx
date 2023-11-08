import { useNavigate } from "react-router-dom";

export function LandingPage() {
  const navigate = useNavigate();

  const Navigation = (e) => {
    e.preventDefault();
    const id = e.target.id;
    navigate(`register/${id}`);
  };

  return (
    <>
      <h1>Landing Page</h1>
      <div>
        <button id="student" onClick={Navigation}>
          Etudiants
        </button>
        <button id="compagny" onClick={Navigation}>
          Entreprise
        </button>
      </div>
    </>
  );
}
