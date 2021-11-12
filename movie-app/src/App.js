import React from "react";
import { useState, useEffect } from "react";
import Movie from "./Movie";

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
                    <Movie
                        key={movie.id} // map을 쓰기때문에 어쨋든 key값은 필요하다
                        title={movie.title_long}
                        coverImg={movie.medium_cover_image}
                        // props는 내가 만드는 거니까 명명해서 {}값만 api에 따라주면 됨
                        genres={movie.genres}
                        runtime={movie.runtime}
                        summary={movie.summary}
                    />
                ))
            )}
        </div>
    );
}

export default App;
