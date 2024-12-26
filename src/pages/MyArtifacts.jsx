import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const MyArtifacts = () => {
    return (
        <div className="w-11/12 mx-auto">
            <nav><Navbar></Navbar></nav>
           <section className="my-12">
            MY ARtifacts
           </section>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default MyArtifacts;