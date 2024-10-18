import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const { currentUser } = useSelector((state) => state.user);

  return <div>{currentUser ? <Outlet /> : <Navigate to="/sign-in" />}</div>;
};

export default PrivateRoute;
