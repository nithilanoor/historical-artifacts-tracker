import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import ArtifactCard from "./ArtifactCard";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


const Featured = () => {

    const [artifacts, setArtifacts] = useState([]);
    const axiosSecure = useAxios();


    useEffect(() => {
        axiosSecure.get('/featured/artifacts')
            .then(res => {
                console.log(res.data);
                setArtifacts(res.data)
            })
    }, [])

    return (
        <div className="my-12">
            <h2 className="text-3xl font-semibold text-center">Featured <span className="text-[#E2B13C]">ARTIFACTS</span></h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 my-8">
                {
                    artifacts.map(art => <ArtifactCard key={art._id} art={art}></ArtifactCard>)
                }
            </div>
            <div className="flex justify-center my-10">
                <Link to="allArtifacts"><button className="border border-[#E2B13C] lg:w-60 px-16 py-2 font-semibold text-[#E2B13C] flex items-center justify-center gap-2 hover:bg-[#E2B13C] hover:text-white">See All <IoIosArrowForward /></button></Link>
            </div>
        </div>
    );
};

export default Featured;