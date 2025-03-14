import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";
import { IoMdHeart } from "react-icons/io";
// import useAxios from "../hooks/useAxios";

const LikedArtifacts = () => {

    const [likes, setLikes] = useState();
    const { user } = useAuth();
    const userId = user?.uid;
    // const axiosSecure = useAxios();

    useEffect(() => {
        if (!userId) return;

        axios.get(`http://localhost:5000/liked-artifacts/${userId}`)
            .then(response => {
                setLikes(response.data);
                console.log(response.data)
            })
            .catch(error => console.error("Error fetching liked products:", error));
    }, [userId]);


    return (
        <div>
            <Helmet>
                <title>Liked Artifacts</title>
            </Helmet>
            <nav><Navbar></Navbar></nav>
            <div className="w-11/12 mx-auto pt-12 mt-12 min-h-screen">
                <section className="my-12">
                    <h2 className="text-xl font-bold text-[#E2B13C]">My Liked Artifacts: ({likes ? likes?.length : 0})</h2>
                    <div>
                        {likes?.length ?
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 mt-4">
                                {likes.map(like => (
                                    <div key={like._id} className="card card-compact bg-base-100 shadow-xl">
                                    <figure>
                                        <img
                                            className="w-full h-60 object-cover"
                                            src={like.image}
                                            alt="Artifacts" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="text-2xl font-serif font-semibold text-[#E2B13C]">{like.name}</h2>
                                        <p><span className="font-bold">Historical Context:</span> {like.historicalContext}</p>
                                        <p className="flex items-center gap-1 mt-1"><IoMdHeart className="text-[#E2B13C]" />Likes: {like.likeCount}</p>
                                        <div className="card-actions justify-start">
                                            <Link to={`/details/${like._id}`}><button className="btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">View Details</button></Link>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                            : <p className="text-gray-300 my-8 text-center font-bold text-4xl mt-10">No liked Artifacts!</p>}
                    </div>
                </section>
            </div>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default LikedArtifacts;