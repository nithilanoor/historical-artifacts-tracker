import { IoMdHeart } from "react-icons/io";
import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";

const Details = () => {

    const artifact = useLoaderData();
    const { name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, addedBy, adderName, likeCount } = artifact;

    return (
        <div>
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
                        <button className="text-green-900 border border-[#E2B13C] rounded-lg p-1 px-2"><IoMdThumbsUp /></button>
                        <button className="border text-red-900 border-[#E2B13C] rounded-lg p-1 px-2"><IoMdThumbsDown /></button>
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