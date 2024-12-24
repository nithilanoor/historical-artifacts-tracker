import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error";
import AllArtifacts from "../pages/AllArtifacts";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddArtifact from "../pages/AddArtifact";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([

    {
        path: '/',
        element: <HomeLayout></HomeLayout>
    },
    {
        path: "*",
        element: <Error></Error>
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "allArtifacts",
        element: <AllArtifacts></AllArtifacts>
    },
    {
        path: "addArtifact",
        element: <PrivateRoute><AddArtifact></AddArtifact></PrivateRoute>
    }

])

export default router;