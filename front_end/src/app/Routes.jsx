import { createBrowserRouter } from 'react-router-dom';
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import User from "../pages/User";
import Login from "../pages/Login";
import Footer from "../layouts/Footer";
import PrivateRoute from '../components/PrivateRoute';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <HomePage />
            </Layout>
        ),
    },
    {
        path: '/home',
        element: (
            <Layout>
                <HomePage />
            </Layout>
        ),
    },
    {
        path: '/login',
        element: (
            <Layout>
                <Login />
            </Layout>
        ),
    },
    {
        path: '/user',
        element: (
            <Layout>
                <PrivateRoute>
                    <User />
                </PrivateRoute>
            </Layout>
        ),
    },
]);

export default router;
