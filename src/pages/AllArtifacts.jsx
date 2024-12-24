import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAxios from "../hooks/useAxios";

const AllArtifacts = () => {

    const axiosSecure = useAxios();
    const [artifacts, setArtifacts] = useState([]);


    useEffect(() => {
        axiosSecure.get('/artifacts')
        .then(res => {
            console.log(res.data);
        })
    }, [])

    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AllArtifacts;