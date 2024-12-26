import axios from "axios";
import { useState } from "react";
// import useAxios from "../hooks/useAxios";


const LikeBtn = ({ artifactId, initialLikes, userId, initialLiked }) => {

    const [likes, setLikes] = useState(initialLikes);
    const [liked, setLiked] = useState(initialLiked);
    // const axiosSecure = useAxios();

    const handleToggleLike = async () => {
        try {
            const response = await axios.put(`/artifacts/${artifactId}/like`);
            if (response.status === 200) {
                setLiked(!liked);
                setLikes(liked ? likes - 1 : likes + 1);
            }
        } catch (error) {
            console.error("Error liking artifact:", error);
        }
    };

    return (
        <div>
            <button
                onClick={handleToggleLike}
                className={`btn ${liked ? "btn-primary" : "btn-outline"}`}
            >
                {liked ? "Unlike" : "Like"} ({likes})
            </button>
        </div>
    );
};

export default LikeBtn;