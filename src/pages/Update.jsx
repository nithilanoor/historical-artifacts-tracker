import { useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";

const Update = () => {

    const artifact = useLoaderData();

    const { _id, name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation } = artifact;

    const axiosSecure = useAxios();

    const handleUpdateArtifact = e => {

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

        const updatedArtifact = { name, image, type, historicalContext, createdAt, discoveredAt, discoveredBy, presentLocation };
        console.log(updatedArtifact);

        // send data to the server
        axiosSecure.put(`/artifacts/${_id}`, updatedArtifact)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        text: "Your Artifact has been updated successfully!",
                        color: '#E2B13C',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
            })
            .catch(err => console.log(err.code))
    }



    return (
        <div className="w-11/12 mx-auto">
            <nav><Navbar></Navbar></nav>
            <section className="my-12">
                <div className="max-w-2xl mx-auto p-6 my-12 bg-white rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-center text-[#E2B13C] my-4">Update Artifact: {name}</h2>
                    <form onSubmit={handleUpdateArtifact}>
                        {/* Artifact Name */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Artifact Name</span>
                            </label>
                            <input
                                defaultValue={name}
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
                                defaultValue={image}
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
                                defaultValue={type}
                                name="type"
                                className="select select-bordered"
                                required>
                                <option value="Tools">Tools</option>
                                <option value="Weapons">Weapons</option>
                                <option value="Documents">Documents</option>
                                <option value="Writings">Writings</option>
                                <option value="Writings">Jewelry</option>
                                <option value="Writings">Sculptures</option>
                                <option value="Writings">Art</option>
                                <option value="Writings">Artifacts</option>
                                <option value="Writings">Relics</option>
                                <option value="Writings">Monuments</option>
                            </select>
                        </div>

                        {/* Historical Context */}
                        <div className="form-control mb-4">
                            <label className="label">
                                <span className="label-text">Historical Context</span>
                            </label>
                            <textarea
                                defaultValue={historicalContext}
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
                                defaultValue={createdAt}
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
                                defaultValue={discoveredAt}
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
                                defaultValue={discoveredBy}
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
                                defaultValue={presentLocation}
                                placeholder="present location"
                                name="presentLocation"
                                type="text"
                                className="input input-bordered"
                                required
                            />
                        </div>


                        <div className="form-control">
                            <button type="submit" className="btn bg-[#E2B13C] text-white hover:text-[#E2B13C] hover:bg-white w-full">Update Artifact</button>
                        </div>
                    </form>
                </div>
            </section>
            <footer><Footer></Footer></footer>
        </div>
    );
};

export default Update;