import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAxios from "../hooks/useAxios";
import ArtifactCard from "../components/ArtifactCard";

const AllArtifacts = () => {

    const axiosSecure = useAxios();
    const [artifacts, setArtifacts] = useState([]);


    useEffect(() => {
        axiosSecure.get('/artifacts')
            .then(res => {
                console.log(res.data);
                setArtifacts(res.data)
            })
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>

            <section className="my-12">
                <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {
                        artifacts.map(art => <ArtifactCard key={art._id} art={art}></ArtifactCard>)
                    }
                </div>
            </section>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllArtifacts;