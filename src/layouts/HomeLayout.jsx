import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Facts from "../components/Facts";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

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
                    {/* Featured Artifacts */}
                    <section>
                        <Featured></Featured>
                    </section>
                    {/* Historical Facts "extra section" */}
                    <section>
                        <Facts></Facts>
                    </section>

                </div>

                {/* Newsletter "extra section" */}
                <section className="w-full">
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