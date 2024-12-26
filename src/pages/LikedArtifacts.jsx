import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const LikedArtifacts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Liked Artifacts</title>
            </Helmet>
            <nav><Navbar></Navbar></nav>
            <section className="my-12">
                <h2 className="text-xl font-bold text-[#E2B13C]">My Liked Artifacts: ()</h2>
            </section>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default LikedArtifacts;