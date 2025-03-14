

const AboutUs = () => {
    return (
        <div className="my-16">
            <h2 className="text-3xl font-semibold text-center">Uncover <span className="text-[#E2B13C] uppercase">History</span></h2>
            <div className="my-5 bg-[#fcf5e4] p-4 w-full md:w-3/4 mx-auto border-l-4 border-b-4 border-[#E2B13C] shadow-xl rounded">
            <p className="text-[#af882c] font-semibold">Welcome to Historical Artifacts Tracker, your ultimate digital archive for exploring and preserving the world’s most significant artifacts. Our platform is dedicated to documenting historical treasures, from ancient relics to modern discoveries, ensuring that their stories are never lost to time. With a vast collection spanning different civilizations and eras, we bring history closer to you. Whether you're a passionate historian or a curious explorer, you'll find a wealth of knowledge at your fingertips. Join us in uncovering the mysteries of the past and celebrating humanity’s rich heritage.</p>
            <img src="/artifactLogo.png" className="w-10 h-10 mx-auto object-contain p-1 m-2" alt="" />
            </div>
        </div>
    );
};

export default AboutUs;