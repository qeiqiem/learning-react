import React, { useEffect, useState } from "react";
import { API_KEY } from "../../ConfigKey";
import { API_URL, IMAGE_BASE_URL } from "../../Config";
import MainImage from "../../common/MainImage";
import MovieInfo from "./Section/MovieInfo";
import GridCards from "../../common/GridCards";
import { Row } from "antd";
import Favorite from "./Section/Favorite";

function MovieDetail(props) {
    let movieId = props.match.params.movieId;
    // console.log(movieId);

    const [movie, setMovie] = useState([]);
    const [casts, setCasts] = useState([]);
    const [actorToggle, setActorToggle] = useState(true);

    const getDetails = async (endPoint) => {
        const json = await (await fetch(endPoint)).json();
        setMovie(json);
    };

    const getCasts = async (endPoint) => {
        const json = await (await fetch(endPoint)).json();
        console.log("크루정보", json);
        setCasts(json.cast);
    };

    const onToggle = () => {
        setActorToggle(!actorToggle);
    };

    useEffect(() => {
        console.log(props.match);

        let endPointCrew = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        let endPointInfo = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;

        getDetails(endPointInfo);
        getCasts(endPointCrew);
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
            <div style={{ width: "85%", margin: "1rem, auto" }}>
                {/* fav */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                    }}
                >
                    <Favorite
                        movieInfo={movie}
                        movieId={movieId}
                        userFrom={localStorage.getItem("userId")}
                    />
                </div>

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
                    <button onClick={onToggle}>
                        Toggle Actor View{" "}
                    </button>
                </div>

                {actorToggle && ( //actorToggle이 true이면..
                    <Row gutter={(16, 16)}>
                        {casts &&
                            casts.map((cast, index) => (
                                <React.Fragment key={index}>
                                    <GridCards
                                        image={
                                            cast.profile_path
                                                ? `${IMAGE_BASE_URL}w500${cast.profile_path}`
                                                : null
                                        }
                                        castName={cast.name}
                                    />
                                </React.Fragment>
                            ))}
                    </Row>
                )}
            </div>
        </div>
    );
}

export default MovieDetail;
