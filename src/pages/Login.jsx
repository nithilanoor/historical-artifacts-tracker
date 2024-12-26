import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Login = () => {

    // authenticate with google
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    text: "You’ve logged in successfully. Welcome Back!",
                    color: '#E2B13C',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError(err.code)
            })
    }

    const { userLogin, setUser } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState({});

    const handleLogIn = e => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const password = form.password.value;

        const loggedInUser = { email, password };
        console.log(loggedInUser);

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    text: "You’ve logged in successfully. Welcome Back!",
                    color: '#E2B13C',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/")
            })
            .catch((err) => {
                setError({ ...error, login: 'Invalid email or password. Try again.' })
                console.log(err.code)
            })

    }

    return (
        <div className="w-11/12 mx-auto">
            <Helmet>
                <title>Artifacts | Login</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="flex justify-center items-center min-h-screen">
                <div className="hero  min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="rounded-xl bg-base-100 w-full md:w-96 py-4 shrink-0 shadow-2xl">
                            <h2 className="text-2xl p-4 font-bold text-[#E2B13C] text-center">Login Now!</h2>
                            <form onSubmit={handleLogIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="">
                                    {
                                        error.login && (
                                            <div role="alert" className="alert h-1 flex alert-error">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 shrink-0 stroke-current"
                                                    fill="none"
                                                    viewBox="0 0 24 24">
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <span className="text-sm text-white">{error.login}</span>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className="mt-4">
                                    <button onClick={handleGoogleSignIn} className="btn w-full bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">Sign in with Google</button>
                                </div>
                                <div className="form-control">
                                    <button className="btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">Login</button>
                                </div>
                            </form>
                            <h4 className="text-center">Don't have an account? <Link to="/auth/register"><span className="text-[#E2B13C]">Register.</span></Link></h4>
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

export default Login;