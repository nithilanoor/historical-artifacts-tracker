

const ArtifactCard = ({ art }) => {

    const { name, image, createdAt, discoveredBy, presentLocation } = art;

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
                <p>Created At: {createdAt}</p>
                <p>Discovered By: {discoveredBy}</p>
                <p>Present Location: {presentLocation}</p>
                <div className="card-actions justify-start">
                    <button className="btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C]">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default ArtifactCard;