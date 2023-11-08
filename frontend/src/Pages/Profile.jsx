import { useEffect, useState } from "react";
import { Input } from "../components/Input";

export default function Profile() {
  const [name, setName] = useState("");
  useEffect(() => console.log(name), [setName]);

  return (
    <>
      <p>On aimerait en savoir plus sur Toi !</p>
      <form action="">
        <Input
          type={"text"}
          label={"nom"}
          onChange={() => setName(e.target.value)}
        />
      </form>
    </>
  );
}
