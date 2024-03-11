import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

export default function PrivateRoute({ children, ...rest }) {
  let { user } = useContext(AuthContext);

  return user ? (
    <Routes>
      <Route {...rest} element={children} />
    </Routes>
  ) : (
    <Navigate to="/login" />
  );
}
