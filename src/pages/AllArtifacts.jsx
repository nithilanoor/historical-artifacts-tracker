import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAxios from "../hooks/useAxios";
import ArtifactCard from "../components/ArtifactCard";
import { Helmet } from "react-helmet-async";

const AllArtifacts = () => {

    const axiosSecure = useAxios();
    const [artifacts, setArtifacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        axiosSecure.get('/artifacts')
            .then(res => {
                console.log(res.data);
                setArtifacts(res.data)
            })
    }, []);

    const filteredArtifacts = artifacts.filter(artifact =>
        artifact.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <Helmet>
                <title>All Artifacts</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto min-h-screen mt-32">
                <section className="my-12">
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search artifacts by name..."
                            className="input input-bordered border-yellow-500 w-full max-w-md"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {
                            filteredArtifacts.map(art => <ArtifactCard key={art._id} art={art}></ArtifactCard>)
                        }
                    </div>
                </section>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllArtifacts;