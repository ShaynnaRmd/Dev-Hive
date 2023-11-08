import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export function Login() {
  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          let response = jwtDecode(credentialResponse.credential);
          //Ajouter response comme token à la bdd ainsi qu'au cookies, à chaque page vrifier si le cookie = celui de bdd, au logout supprimé cookie
          console.log(response);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      <h1>Login</h1>
    </>
  );
}
