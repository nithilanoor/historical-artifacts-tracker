import { IoMdHeart } from "react-icons/io";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdThumbsUp } from "react-icons/io";
// import { IoMdThumbsDown } from "react-icons/io";
// import LikeBtn from "../components/LikeBtn";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import axios from "axios";


const Details = ({ art }) => {


    // const { id } = useParams();
    const artifact = useLoaderData();
    const { _id, name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, addedBy, adderName, likeCount } = artifact;

    // const [likes, setLikes] = useState(likeCount);

    // const handleLike = async () => {
    //     try {

    //         const response = await axios.patch(`https://historical-artifacts-server-virid.vercel.app/artifacts/${_id}/like`);

    //         if (response.status === 200) {
    //             setLikes(likes + 1);
    //         } else {
    //             console.error('Failed to update like count');
    //         }
    //     } catch (error) {
    //         console.error('Error liking artifact:', error);
    //     }
    // };


    return (
        <div>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Artifacts"
                        className="rounded-xl max-h-96 object-cover" />
                </figure>
                <div className="card-body items-center text-start">
                    <h2 className="text-2xl font-serif font-semibold text-[#E2B13C]">{name}</h2>
                    <p className="text-center mb-4 font-serif">{historicalContext}</p>
                    <div className="border px-8 py-2 rounded-xl border-[#E2B13C]">
                        <p><span className="font-bold">Type: </span>{type}</p>
                        <p><span className="font-bold">Created At: </span>{createdAt}</p>
                        <p><span className="font-bold">Discovered At: </span>{discoveredAt}</p>
                        <p><span className="font-bold">Discovered By: </span>{discoveredBy}</p>
                        <p><span className="font-bold">Present Location: </span>{presentLocation}</p>
                        <p><span className="font-bold">Email: </span>{addedBy}</p>
                        <p><span className="font-bold">Adder Name: </span>{adderName}</p>
                        <p className="flex items-center gap-1 mt-1 font-semibold"><IoMdHeart className="text-[#E2B13C]" />Likes: {likeCount}</p>
                    </div>
                    <div className="flex gap-4 justify-start items-center">
                        <button className="border border-yellow-500 px-4 rounded-lg py-1 text-yellow-500">
                            <IoMdThumbsUp/>
                        </button>
                    </div>
                </div>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Details;