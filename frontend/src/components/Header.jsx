import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function Header() {
  let { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Link to="/">Home</Link>
      <span> | </span>
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ) : (
        <Link to="/login">Login</Link>
      )}

      {user && <p>Hello {user.username}</p>}
    </>
  );
}
