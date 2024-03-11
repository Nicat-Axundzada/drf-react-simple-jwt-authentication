import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function LoginPage() {
  let { loginUser } = useContext(AuthContext);

  return (
    <>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter Username" />
        <input type="password" name="password" placeholder="Enter Password" />
        <input type="submit" />
      </form>
    </>
  );
}
