import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Header() {
  let { name } = useContext(AuthContext);
  return (
    <>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/login">Login</Link>

      <p>Hello {name}</p>
    </>
  );
}
