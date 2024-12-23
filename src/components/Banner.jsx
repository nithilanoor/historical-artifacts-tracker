import antikythera from "../../public/antikythera.jpg"
import rosetta from "../../public/rosetta.jpg"
import deadSeaRolls from "../../public/deadSeaRolls.jpg"

const Banner = () => {
    return (
        <section className="py-1">
            <div className="carousel w-full">
                {/* Slide 1 */}
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={antikythera}
                        alt="Antikythera Mechanism"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold text-[#E2B13C]">Antikythera Mechanism</h2>
                        <p className="mt-2 text-sm">An ancient analog computer over 2,000 years old.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 2 */}
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={rosetta}
                        alt="Rosetta Stone"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold text-[#E2B13C]">Rosetta Stone</h2>
                        <p className="mt-2 text-sm">The key to deciphering ancient Egyptian hieroglyphs.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>

                {/* Slide 3 */}
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={deadSeaRolls}
                        alt="Dead Sea Scrolls"
                        className="w-full h-[400px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                        <h2 className="text-2xl font-bold text-[#E2B13C]">Dead Sea Scrolls</h2>
                        <p className="mt-2 text-sm">Ancient manuscripts dating back over 2,000 years.</p>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
