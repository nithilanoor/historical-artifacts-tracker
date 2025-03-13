import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const Register = () => {

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
                    text: "Welcome to  Historical Artifacts! Your account has been registered successfully.",
                    color: '#E2B13C',
                    showConfirmButton: false,
                    timer: 1900
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError(err.code)
            })
    }

    const { createNewUser, setUser, updateUserProfile } = useAuth();
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        // get form data
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

        setError({});

        if (!passwordPattern.test(password)) {
            setError({
                ...error,
                password: "Password must be at least 6 characters long and include both uppercase and lowercase letters."
            });
            return;
        }

        const newUser = { name, email, photo, password }
        console.log(newUser);

        createNewUser(email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    text: "Welcome to  Historical Artifacts! Your account has been registered successfully.",
                    color: '#E2B13C',
                    showConfirmButton: false,
                    timer: 1900
                });
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(
                        navigate("/")
                    )
                    .catch(err => {
                        console.log(err);
                    })
                // console.log(user);
            })
            .catch((err) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError({ ...error, register: 'Invalid user information. Try again.' })
                console.log(err.code);
            });

    }

    return (
        <div>
            <Helmet>
                <title>Artifacts | Register</title>
            </Helmet>
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="w-11/12 mx-auto">
                <div className="flex justify-center items-center min-h-screen">
                    <div className="hero  min-h-screen">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="rounded-xl bg-base-100 w-full md:w-96 py-4 shrink-0 shadow-2xl">
                                <h2 className="text-2xl p-4 font-bold text-[#E2B13C] text-center">Register Now!</h2>
                                <form onSubmit={handleRegister} className="card-body">
                                    {/* Name */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                                    </div>

                                    {/* Email */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                                    </div>

                                    {/* Photo URL */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo URL</span>
                                        </label>
                                        <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                                    </div>

                                    {/* Password */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                        {
                                            error.password && (
                                                <p className="text-sm text-red-900">{error.password}</p>
                                            )
                                        }
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div>
                                        {
                                            error.register && (
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
                                                    <span className="text-sm text-white">{error.register}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="mt-6">
                                        <button onClick={handleGoogleSignIn} className="btn w-full bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">Sign in with Google</button>
                                    </div>
                                    <div className="form-control">
                                        <button className="btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">Register</button>
                                    </div>
                                </form>
                                <h4 className="text-center">Already have an account? <Link to="/auth/login"><span className="text-[#E2B13C]">Login.</span></Link></h4>
                            </div>
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

export default Register;