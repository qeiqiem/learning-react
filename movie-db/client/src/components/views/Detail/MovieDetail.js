import React, { useEffect, useState } from "react";
import { API_KEY } from "../../ConfigKey";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../common/MainImage";
import MovieInfo from "./Section/MovieInfo";

function MovieDetail(props) {
    let movieId = props.match.params.movieId;
    const [movie, setMovie] = useState([]);

    const getDetail = async (endPoint) => {
        const json = await (await fetch(endPoint)).json();
        setMovie(json);
    };
    console.log(movie);

    useEffect(() => {
        // console.log(props.match);

        let endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        getDetail(endPointInfo);
    }, []);

    return (
        <div>
            {/* header */}
            {movie.backdrop_path && (
                /* backdrop_path라는 값을 가져오는데 시간이 걸립니다 ^^ 
                    그 값을 가져오기 전에 불러 드릴려고 하면 Undefined 가 나와요 ~ 
                    그래서  {Movie.backdrop_path && ~~ } 이렇게 까지 명시해줘서   Movie.backdroup_path가 있을떄에만   그러니깐  가져온 후에 
                    보여줄수있게 하니깐 undefined 이 아닌 실제 값이 나오는 것입니다 ~ ! ^^
                    */

                <MainImage
                    image={`${IMAGE_BASE_URL}w1280${movie.backdrop_path}`}
                    title={movie.original_title}
                    text={movie.overview}
                />
            )}
            {/* body */}
            <div style={{ width: "85%", margin: "1rem, auto" }}></div>

            {/* movie info */}
            <MovieInfo movie={movie} />

            <br />
            {/* actor grid */}

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "2rem",
                }}
            >
                <button>Toggle Actor View </button>
            </div>
        </div>
    );
}

export default MovieDetail;
