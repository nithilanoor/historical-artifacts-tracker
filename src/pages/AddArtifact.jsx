import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAuth from "../hooks/useAuth";


const AddArtifact = () => {

    const { user } = useAuth();

    const handleAddArtifact = e => {

        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;
        const type = form.type.value;
        const historicalContext = form.historicalContext.value;
        const createdAt = form.createdAt.value;
        const discoveredAt = form.discoveredAt.value;
        const discoveredBy = form.discoveredBy.value;
        const presentLocation = form.presentLocation.value;
        const adderName = form.adderName.value;
        const addedBy = form.addedBy.value;

        const newArtifact = {name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation, adderName, addedBy};
        console.log(newArtifact);

    }

    return (
        <div className="w-11/12 mx-auto">
            <nav>
                <Navbar></Navbar>
            </nav>
            <div className="max-w-2xl mx-auto p-6 my-12 bg-white rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold text-center text-[#E2B13C] my-4">Add A Artifact</h2>
                <form onSubmit={handleAddArtifact}>
                    {/* Artifact Name */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Artifact Name</span>
                        </label>
                        <input
                            name="name"
                            type="text"
                            className="input input-bordered"
                            placeholder="artifact name"
                            required
                        />
                    </div>

                    {/* Artifact Img */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Artifact Image URL</span>
                        </label>
                        <input
                            name="image"
                            type="text"
                            className="input input-bordered"
                            placeholder="image url"
                            required
                        />
                    </div>

                    {/* Artifact type */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Artifact Type</span>
                        </label>
                        <select
                            name="type"
                            className="select select-bordered"
                            required>
                            <option value="Tools">Tools</option>
                            <option value="Weapons">Weapons</option>
                            <option value="Documents">Documents</option>
                            <option value="Writings">Writings</option>
                        </select>
                    </div>

                    {/* Historical Context */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Historical Context</span>
                        </label>
                        <textarea
                            name="historicalContext"
                            placeholder="write the historical context in brief"
                            className="textarea textarea-bordered"
                            required
                        />
                    </div>

                    {/* Created At */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Created At</span>
                        </label>
                        <input
                            placeholder="created at"
                            name="createdAt"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Discovered At */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Discovered At</span>
                        </label>
                        <input
                            placeholder="discovered at"
                            name="discoveredAt"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Discovered By */}
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text">Discovered By</span>
                        </label>
                        <input
                            placeholder="discovered by"
                            name="discoveredBy"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Present Location */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Present Location</span>
                        </label>
                        <input
                            placeholder="present location"
                            name="presentLocation"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Artifact Adder Name */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Artifact Adder Name</span>
                        </label>
                        <input
                        defaultValue={user?.displayName}
                            name="adderName"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    {/* Artifact Adder Email */}
                    <div className="form-control mb-6">
                        <label className="label">
                            <span className="label-text">Artifact Adder Email</span>
                        </label>
                        <input
                        defaultValue={user?.email}
                            name="addedBy"
                            type="text"
                            className="input input-bordered"
                            required
                        />
                    </div>

                    <div className="form-control">
                        <button type="submit" className="btn bg-[#E2B13C] text-white hover:text-[#E2B13C] hover:bg-white w-full">Add Artifact</button>
                    </div>
                </form>
            </div>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default AddArtifact;