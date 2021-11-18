// Defaults
import React, { useState, useEffect } from "react";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import { API_KEY } from "../../ConfigKey";
// Components
import MainImage from "./Section/MainImage";

function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [mainMovie, setMainMovie] = useState(null);

    useEffect(() => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
        fetchMovies(endPoint);
    }, []);

    const fetchMovies = async (endPoint) => {
        //response 데이터 받아옴
        /* fetch(endPoint)
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setMovies(res.results);
            }); */
        const json = await (await fetch(endPoint)).json();
        setMovies(json.results);
        setMainMovie(json.results[0]);
    };

    return (
        <div style={{ width: "100%", margin: "0" }}>
            {/* Main Image */}
            {mainMovie && (
                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${mainMovie.backdrop_path}`}
                    title={mainMovie.original_title}
                    text={mainMovie.overview}
                />
            )}

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
