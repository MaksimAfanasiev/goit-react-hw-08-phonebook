import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ children, restricted }) => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        isLoggedIn && restricted
            ?
            <Navigate to={'/contacts'} replace />
            :
            children
    )
}