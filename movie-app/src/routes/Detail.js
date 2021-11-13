import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const { id } = useParams();
    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        console.log(json);

        // const json = await (await fetch('')).json()
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>Details..</h1>;
}

export default Detail;
