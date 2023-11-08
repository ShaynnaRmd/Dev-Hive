import { Input } from "../components/Input";

export default function Profile() {
  const [name, setName] = useState("");

  return (
    <>
      <p>On aimerait en savoir plus sur Toi !</p>
      <form action="">
        <Input type={"text"} label={"nom"} onChange={onChange} />
      </form>
    </>
  );
}
