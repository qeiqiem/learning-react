// Defaults
import React, { useState, useEffect } from "react";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import { API_KEY } from "../../ConfigKey";
import { Row } from "antd";
// Components
import MainImage from "../../common/MainImage";
import GridCards from "../../common/GridCards";

function LandingPage() {
    const [movies, setMovies] = useState([]);
    const [mainMovie, setMainMovie] = useState(null);
    const [currentPage, setCurrentPage] = useState(0);

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
        setMovies([...movies, ...json.results]);
        setMainMovie(json.results[0]);
        setCurrentPage(json.page);
    };

    const loadItems = () => {
        const endPoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
            currentPage + 1
        }`;
        fetchMovies(endPoint);
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
                <Row gutter={(16, 16)}>
                    {movies &&
                        movies.map((movie, index) => (
                            <React.Fragment key={index}>
                                <GridCards
                                    // LandingPage
                                    image={
                                        movie.poster_path
                                            ? `${IMAGE_BASE_URL}w500${movie.poster_path}`
                                            : null
                                    }
                                    movieId={movie.id}
                                    movieName={movie.original_title}
                                />
                            </React.Fragment>
                        ))}
                </Row>
            </div>

            <div
                style={{ display: "flex", justifyContent: "center" }}
            >
                <button onClick={loadItems}>Load More</button>
                {/* 계속 style오류가 나는데 해결방법을 모르겠음.. */}
            </div>
        </div>
    );
}

export default LandingPage;
