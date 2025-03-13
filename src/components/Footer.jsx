import { BsInstagram } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { GiSpartanHelmet } from "react-icons/gi";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-zinc-800 p-4">
            <div className="flex justify-center items-center gap-1">
                <p className="text-4xl text-[#E2B13C]"><GiSpartanHelmet /></p>
                <h2 className="text-3xl font-bold text-center text-white">Historical Artifacts</h2>
            </div>

            <div className="my-12 grid mx-auto space-y-4 md:space-y-0 md:flex justify-around gap-12">

                <div>
                    <h3 className="text-xl font-bold text-white">Contact Us</h3>
                    <ul className="text-gray-400 font-semibold">
                        <li className="flex gap-2 items-center ">historicalartifacts@gmail.com</li>
                        <p className=""> Historical Artifacts Tracker <br />
                            1234 Elm Street <br />
                            Springfield, IL 62704 <br />
                            USA</p>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Find Us On</h3>
                    <ul className="text-gray-400 font-semibold">
                        <li className="flex gap-2 items-center"><BsInstagram className="text-[#E2B13C]" />Instagram</li>
                        <li className="flex gap-2 items-center"><FaFacebookSquare className="text-[#E2B13C]" /> Facebook</li>
                        <li className="flex gap-2 items-center"><FaSquareXTwitter className="text-[#E2B13C]" /> Twitter</li>
                        <li className="flex gap-2 items-center"><FaYoutube className="text-[#E2B13C]" /> Youtube</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-white">Useful Links</h3>
                    <ul className="text-gray-400 font-semibold">
                        <a href="#banner">Home</a>
                        <li>About Us</li>
                        <li>Lessons</li>
                        <li>Contacts</li>
                    </ul>
                </div>

            </div>
            <p className="text-center  text-[#E2B13C]">© 2024 Historical Artifacts. All rights reserved.</p>
        </div>
    );
};

export default Footer;