import Axios from "axios";
import React, { useEffect } from "react";

function Favorite(props) {
    const movieId = props.movieId;
    const userFrom = props.userFrorm;
    const movieTitle = props.movieInfo.title;
    const moviePost = props.movieInfo.backdrop_path;
    const movieRunTime = props.movieInfo.runtime;

    useEffect(() => {
        let variables = {
            userFrom,
            movieId,
        };

        // endpoint/ 임의로 정할 수 있다.
        Axios.post("/api/favorite/favoriteNumber", variables).then(
            (res) => {
                if (res.data.success) {
                } else {
                    alert("Error");
                }
            }
        );
    }, []);

    return <div></div>;
}

export default Favorite;
