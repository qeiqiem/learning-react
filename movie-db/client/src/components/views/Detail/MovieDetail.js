import React, { useEffect } from "react";
import { API_KEY } from "../../ConfigKey";
import { API_URL } from "../../Config";

function MovieDetail(props) {
    let movieId = props.match.params.movieId;
    // console.log(movieId);

    //   const getDetail = async (endPoint) => {
    //     const json = await (await fetch(endPoint)).json();
    //     console.log(json);
    // };

    // useEffect(() => {
    //     // console.log(props.match);
    //     const endPoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    //     getDetail(endPoint);
    // }, []);

    const getDetail = async () => {
        const json = await (
            await fetch(
                `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
            )
        ).json();
        // console.log(json);
    };

    useEffect(() => {
        console.log(props.match);
        getDetail();
    }, []);

    return <div></div>;
}

export default MovieDetail;
