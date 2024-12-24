import { IoMdHeart } from "react-icons/io";

const ArtifactCard = ({ art }) => {

    const { name, image, historicalContext, likeCount } = art;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure>
                <img
                    className="w-full h-60 object-cover"
                    src={image}
                    alt="Artifacts" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-serif font-semibold text-[#E2B13C]">{name}</h2>
                <p><span className="font-bold">Historical Context:</span> {historicalContext}</p>
                <p className="flex items-center gap-1 mt-1"><IoMdHeart className="text-[#E2B13C]" />Likes: {likeCount}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;