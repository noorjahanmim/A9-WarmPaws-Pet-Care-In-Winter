import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import MyProfile from "../pages/MyProfile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import ServiceDetails from "../pages/ServiceDetails";
import ProtectedRoute from "../routes/ProtectedRoute";
import ForgotPassword from "../ForgotPassword";






export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/myProfile',
                element: <MyProfile />
            },
            {
                path: '/service/:serviceId',
                element: <ProtectedRoute><ServiceDetails /></ProtectedRoute>
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path:
                    "/forgot-password", element: <ForgotPassword />
            },
        ]
    }
])
