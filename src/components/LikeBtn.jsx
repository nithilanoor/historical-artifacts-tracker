import { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../hooks/useAuth";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

const LikeBtn = ({ productId }) => {
    const { user } = useAuth();
    const userId = user?.uid
    const [likeCount, setLikeCount] = useState(0);
    const [liked, setLiked] = useState(false);
    const axiosSecure = useAxios();

    useEffect(() => {
        axiosSecure.get(`/artifacts/${productId}`)
            .then(response => {
                setLikeCount(response.data.likeCount);

                // Check if the user has already liked this product
                if (response.data.likedBy?.includes(userId)) {
                    setLiked(true);
                }
            })
            .catch(error => console.error("Error fetching likes:", error));
    }, [productId, userId]);

    const handleLike = () => {
        if (liked) return; // Prevent multiple likes

        axiosSecure.post(`/artifacts/${productId}/like`, { userId })
            .then(() => {
                setLikeCount(prev => prev + 1);
                console.log(userId)
                setLiked(true);
                Swal.fire({
                    position: "top-end",
                    width: 350,
                    heightAuto: true,
                    icon: "success",
                    text: "Artifact Liked!",
                    showConfirmButton: false,
                    timer: 1000
                  });
            })
            .catch(error => {
                console.error("Error liking product:", error);
                if (error.response?.status === 400) {
                    setLiked(true); // Prevent spam clicking if backend rejects duplicate likes
                }
            });
    };

    return (
        <button
            className={`px-4 py-2 my-2 rounded-md transition ${liked ? "bg-gray-400 flex justify-center items-center gap-2" : "btn bg-[#E2B13C] text-white hover:bg-white hover:text-[#E2B13C] flex items-center justify-center gap-2"}`}
            onClick={handleLike}
            disabled={liked}
        >
            <FaHeart /> {likeCount} {liked ? "Liked" : "Like"}
        </button>
    );
};

export default LikeBtn;
