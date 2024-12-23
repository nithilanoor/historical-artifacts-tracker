import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error";
import AllArtifacts from "../pages/AllArtifacts";


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
        path: "allArtifacts",
        element: <AllArtifacts></AllArtifacts>
    }

])

export default router;