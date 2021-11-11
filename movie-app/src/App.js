import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        // const response = await fetch(
        //     "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
        // );
        // const json = await response.json();
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMovies();
    }, []);

    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading....</h1>
            ) : (
                movies.map((movie) => (
                    <div>
                        <h2>{movie.title_long}</h2>
                        <img src={movie.medium_cover_image} />
                        <p>
                            {/* <strong>Jenres </strong> */}
                            {movie.genres.map((g) => g).join(" | ")}
                            {/* {movie.genres.map((g) => (
                                <span key={g}> | {g}</span>
                            ))} */}
                        </p>
                        <ul>
                            <li>{movie.runtime}mins</li>
                            <li>{movie.summary}</li>
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default App;
