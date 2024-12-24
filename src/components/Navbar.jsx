import { Link } from "react-router-dom";
import { GiSpartanHelmet } from "react-icons/gi";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { CiUser } from "react-icons/ci";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const links = <>

        <Link className="font-semibold" to="/">Home</Link>
        <Link className="font-semibold" to="/allArtifacts">All Artifacts</Link>
        <Link className="font-semibold" to="/addArtifact">Add Artifact</Link>
    </>

    return (
        <div className="navbar bg-[#E2B13C] pt-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-[#E2B13C] rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <div className="flex flex-col gap-2 text-white">
                            {links}
                        </div>
                    </ul>
                </div>
                <div className="flex items-center gap-1">
                    <h2 className="text-4xl text-zinc-900"><GiSpartanHelmet /></h2>
                    <a className="text-white text-xl font-bold">Historical Artifacts</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-5 text-white">
                        {links}
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && user?.email ? <div className="flex items-center gap-2">
                        <div>
                            {
                                user && user?.photoURL ? <div className="tooltip tooltip-bottom" data-tip={user.displayName}><img src={user && user.photoURL} className="w-11 h-11 rounded-full object-cover" alt="" />
                                </div> : <div><p className="flex justify-center items-center w-11 h-11 border rounded-full border-[#E2B13C] text-[#E2B13C]"><CiUser /></p><span className="bg-[#E2B13C] text-white rounded-xl text-sm p-1 absolute top-16 right-32 opacity-0 hover:opacity-95">
                                    {user && user.displayName}
                                </span></div>
                            }
                        </div> <button onClick={logOut} className="btn text-[#E2B13C] bg-white">Log Out</button></div> : <Link to="/auth/login" className="btn text-[#E2B13C] bg-white">Login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;