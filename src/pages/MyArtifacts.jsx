import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import useAxios from "../hooks/useAxios";
import { MdDeleteForever, MdOutlineModeEditOutline } from "react-icons/md";
import { Link } from "react-router-dom";


const MyArtifacts = () => {

    const [artifacts, setArtifacts] = useState([]);
    const { user } = useAuth();
    const axiosSecure = useAxios();

    useEffect(() => {
        axiosSecure.get(`/artifacts?email=${user.email}`)
            .then(res => {
                console.log(res.data)
                setArtifacts(res.data)
            })
    }, [user.email])

    return (
        <div className="w-11/12 mx-auto">
            <nav><Navbar></Navbar></nav>
            <section className="my-12">
                <h2 className="text-xl font-bold text-[#E2B13C]">My Artifacts: ({artifacts.length})</h2>
                <div>
                    {artifacts.length === 0 ? (
                        <p className="text-gray-300 my-8 text-center font-bold text-2xl">No artifacts found. Please add some artifacts to see them here.</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Email</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Present Location</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {artifacts.map((art, index) => (
                                        <tr key={art.id || index}>
                                            <th className="text-[#e2b13c]">{index + 1}</th>
                                            <td>{art.addedBy}</td>
                                            <td>{art.name}</td>
                                            <td>{art.type}</td>
                                            <td>{art.presentLocation}</td>
                                            <td>
                                                <button className="mx-1 btn text-white btn-error btn-xs"><MdDeleteForever /></button>
                                                <Link to={`/update/${art._id}`}><button className=" btn text-white bg-[#e2b13c] btn-xs"><MdOutlineModeEditOutline /></button></Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </section>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default MyArtifacts;