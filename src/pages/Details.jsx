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
import LikeBtn from "../components/LikeBtn";


const Details = () => {


    const artifact = useLoaderData();
    const { _id, name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, addedBy, adderName, likeCount } = artifact;


    return (
        <div>
            <Helmet>
                <title>{name}</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className=" min-h-screen">
                <div className="card bg-base-100">
                    <figure className="px-10 pt-10">
                        <img
                            src={image}
                            alt="Artifacts"
                            className="rounded-xl max-h-96 object-cover" />
                    </figure>
                    <div className="card-body items-center text-start">
                        <h2 className="text-2xl font-serif font-semibold text-[#E2B13C]">{name}</h2>
                        <p className="text-center mb-4 font-serif">{historicalContext}</p>
                        <div className="border shadow-xl px-8 py-4 rounded-xl border-[#E2B13C]">
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
                            <LikeBtn productId={_id} />
                        </div>
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