import { Link } from "react-router-dom";

const Navbar = () => {

    const links = <>

        <Link className="font-semibold" to="/">Home</Link>
        <Link className="font-semibold" to="/">All Artifacts</Link>
        <Link className="font-semibold" to="/">Add Artifacts</Link>
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
                <a className="btn btn-ghost text-white text-xl font-bold">Historical Artifacts</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <div className="flex gap-5 text-white">
                        {links}
                    </div>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn text-[#E2B13C]">Login</a>
            </div>
        </div>
    );
};

export default Navbar;