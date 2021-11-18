import React, { useState, useEffect } from "react";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import { API_KEY } from "../../ConfigKey";

function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [mainMovie, setMainMovie] = useState(null);

    const getMainMovie = async () => {
        // 원래코드..
        // fetch(
        //     `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
        // )
        //     .then((res) => res.json())
        //     .then((res) => console.log(res));

        const json = await (
            await fetch(
                `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`
            )
        ).json();
        console.log(json);
        // setMainMovie(json.)
    };

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        getMainMovie();
    }, []);

    return (
        <div style={{ width: "100%", margin: "0" }}>
            {/* Main Image */}
            {/* {MainMovieImage && (
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${MainMovieImage.backdrop_path}`}
                /> */}
            <div style={{ width: "85%", margin: "1rem auto" }}>
                <h2>Movies by latest</h2>
                <hr />

                {/* Movie Grid Cards */}
            </div>
            <div
                style={{ display: "flex", justifyContent: "center" }}
            >
                <button> Load More</button>
            </div>
        </div>
    );
}

export default LandingPage;
