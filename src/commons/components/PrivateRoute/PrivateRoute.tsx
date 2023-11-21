import { Navigate } from "react-router-dom";

interface Props { element: React.ReactNode; isAuthenticated: boolean }

function PrivateRoute({ element, isAuthenticated }: Props) {
  return (
    <>
      { isAuthenticated ? element : <Navigate to="/login" />}
    </>
  );
}

export default PrivateRoute;