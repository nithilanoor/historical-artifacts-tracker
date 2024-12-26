import { useState } from "react";
import useAxios from "../hooks/useAxios";

const LikeBtn = ({ id, initialLikeCount }) => {

    const [liked, setLiked] = useState(false);
    const [likeCount, setLikeCount] = useState(initialLikeCount);
    const axiosSecure = useAxios();

    const handleToggle = () => {
        const action = liked ? "dislike" : "like";
        axiosSecure.put(`/artifacts/${id}/like`, action)
            .then(res => res.json())
            .then(() => {
                setLikeCount(liked ? likeCount - 1 : likeCount + 1);
                setLiked(!liked);
            })
            .catch(err => console.log(err.code))

    }

    return (
        <div>
            <button
                className={`btn ${liked ? "btn-error" : "btn-primary"} btn-sm`}
                onClick={handleToggle}
            >
                {liked ? "Unlike" : "Like"} ({likeCount})
            </button>
        </div>
    );
};

export default LikeBtn;