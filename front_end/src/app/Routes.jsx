import { createBrowserRouter, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from "../layouts/Header";
import HomePage from "../pages/HomePage";
import Error from "../pages/ErrorPage"
import User from "../pages/User";
import Login from "../pages/Login";
import Footer from "../layouts/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export function PrivateRoute({ children }) {
    const isAuth = useSelector((state) => state.login.isAuth)
    if (!isAuth) {
        return <Navigate to={'/login'} />
    } else {
        return children
    }
}

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
                    <User />
            </Layout>
        ),
    },
    {
        path: '/*',
        element: (
            <Layout>
                <Error />
            </Layout>
        ),
    },
])

export default router
