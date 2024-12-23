import { GiGlowingArtifact } from "react-icons/gi";

const NewsLetter = () => {
    return (

        <div className="bg-[#fcf5e4] py-5">
            <div className="md:flex justify-around items-center">
                <div>
                    <div className="p-4">
                        <h1 className="text-[#E2B13C] text-4xl font-bold">Stay Informed With Our <br /> Newsletter</h1>
                        <p className="text-[#E2B13C]">Get updated information, news, insights, and upcoming exhibitions</p>
                    </div>
                    <div className="join p-4">
                        <input className="input input-bordered rounded-full join-item" placeholder="Email" />
                        <button className="btn join-item text-[#E2B13C] bg-zinc-800 rounded-r-full">Subscribe</button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <GiGlowingArtifact className="text-9xl text-[#E2B13C]"/>
                </div>
            </div>
        </div>

    );
};

export default NewsLetter;