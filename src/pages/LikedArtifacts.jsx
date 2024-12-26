import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState } from "react";

const LikedArtifacts = () => {

    const [likes, setLikes] = useState();

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Liked Artifacts</title>
            </Helmet>
            <nav><Navbar></Navbar></nav>
            <section className="my-12">
                <h2 className="text-xl font-bold text-[#E2B13C]">My Liked Artifacts: ({likes?.length ? likes.length : 0})</h2>
                <div>
                    {likes?.length === 0 ? likes?.length : <p className="text-gray-300 my-8 text-center font-bold text-2xl">No liked Artifacts!</p>}
                </div>
            </section>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default LikedArtifacts;