import Banner from "../components/Banner";
import Facts from "../components/Facts";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const HomeLayout = () => {
    return (
        <div>

            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>

            <main className="w-11/12 mx-auto">
                {/* Banner */}
                <section>
                    <Banner></Banner>
                </section>
                {/* Featured Artifacts */}
                <section>
                    <Featured></Featured>
                </section>
                {/* Historical Facts "extra section" */}
                <section>
                    <Facts></Facts>
                </section>
                {/* Newsletter "extra section" */}
                <section>
                    <NewsLetter></NewsLetter>
                </section>
            </main>

            <footer className="w-11/12 mx-auto">
                <Footer></Footer>
            </footer>

        </div>
    );
};

export default HomeLayout;