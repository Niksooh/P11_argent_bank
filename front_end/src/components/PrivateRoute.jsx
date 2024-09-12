import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const isAuth = useSelector((state) => state.user.isAuth);
    if (!isAuth) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default PrivateRoute;
