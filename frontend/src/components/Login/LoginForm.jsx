import { useState } from "react";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LogIn = () => {};

  return (
    <div>
      <form action="" onSubmit={LogIn}>
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
      </form>
    </div>
  );
}
