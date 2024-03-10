import { Route, Navigate } from "react-router-dom";

export default function PrivateRoute({ children, ...rest }) {
  const isAuthenticated = false;

  return isAuthenticated ? (
    <Route {...rest} element={children} />
  ) : (
    <Navigate to="/login" />
  );
}
