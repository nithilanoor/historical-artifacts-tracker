import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Helmet>
                <title>Artifacts | Error 404</title>
            </Helmet>
            <div class="text-center">
                <h1 class="text-6xl font-bold mb-4 text-[#E2B13C]">404</h1>
                <p class="text-xl mb-6">Oops! The page you are looking for doesn't exist.</p>
                <Link to="/" class="bg-white text-[#E2B13C] font-semibold px-6 py-3 rounded shadow-md hover:bg-gray-100">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default Error;