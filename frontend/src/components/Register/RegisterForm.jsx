import { useState } from "react";

export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [handleError, setHandleError] = useState(false);

  const Register = (e) => {
    e.preventDefault();
    password !== confirmPassword
      ? setHandleError("Les mots de passe ne correspondent pas.")
      : undefined;
  };

  return (
    <div>
      <form action="" onSubmit={Register}>
        <label>
          Email :
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password :
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <label>
          Confirm Password :
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </label>
        <input type="submit" />
      </form>
      {setHandleError && <p>{handleError}</p>}
    </div>
  );
}
