import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loading from "../components/Loading";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <Loading></Loading>
    }

    if (user && user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;