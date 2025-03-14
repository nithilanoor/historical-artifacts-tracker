import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Facts from "../components/Facts";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import AboutUs from "../components/AboutUs";
import OurMission from "../components/OurMission";

const HomeLayout = () => {
    return (
        <div>

            <Helmet>
                <title>Artifacts | Home</title>
            </Helmet>
            <nav className="">
                <Navbar></Navbar>
            </nav>

            <main>

                {/* Banner */}
                <section id="banner">
                    <Banner></Banner>
                </section>

                <div className="w-11/12 mx-auto">
                
                    {/* About Us */}
                    <section id="aboutUs">
                        <AboutUs></AboutUs>
                    </section>

                    {/* Our Mission */}
                    <section id="mission">
                        <OurMission></OurMission>
                    </section>

                    {/* Featured Artifacts */}
                    <section id="featured">
                        <Featured></Featured>
                    </section>
                    {/* Historical Facts "extra section" */}
                    <section id="facts">
                        <Facts></Facts>
                    </section>

                </div>

                {/* Newsletter "extra section" */}
                <section id="contact" className="w-full">
                    <NewsLetter></NewsLetter>
                </section>

            </main>

            <footer className="">
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;