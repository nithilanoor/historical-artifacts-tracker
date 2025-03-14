import React from 'react';
import { FaDatabase, FaGlobe, FaHeart, FaUsers } from 'react-icons/fa';

const OurMission = () => {

    const features = [
        {
          icon: <FaDatabase className="text-3xl text-[#E2B13C]" />,
          title: "Comprehensive Artifact Database",
          description: "Explore a vast collection of artifacts, complete with historical context, images, and detailed descriptions.",
        },
        {
          icon: <FaUsers className="text-3xl text-[#E2B13C]" />,
          title: "User Contributions",
          description: "Share your knowledge by adding artifacts to our growing archive.",
        },
        {
          icon: <FaHeart className="text-3xl text-[#E2B13C]" />,
          title: "Interactive Features",
          description: "Engage with artifacts by liking, bookmarking, and discussing their historical importance.",
        },
        {
          icon: <FaGlobe className="text-3xl text-[#E2B13C]" />,
          title: "Global Access",
          description: "Learn about artifacts from various civilizations, cultures, and time periods, all in one place.",
        },
      ];

    return (
        <div className='my-16'>
            <h2 className="text-3xl font-semibold text-center">Our <span className="text-[#E2B13C] uppercase">mission</span></h2>
            <div className="grid grid-cols-1 gap-4 my-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start p-4 shadow-[#fcf5e4] bg-white shadow-lg hover:shadow-xl border-l-4 border-b-4 border-[#fcf5e4] rounded-lg w-full md:w-3/4 lg:w-1/2 mx-auto h-50">
              <div className="mr-4">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-[#E2B13C]">{feature.title}</h3>
                <p className="text-gray-500 text-sm font-semibold">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
    );
};

export default OurMission;