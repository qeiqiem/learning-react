import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Detail() {
    const [movieDetail, setMovieDetail] = useState([]);

    const { id } = useParams(); // url 추출
    const getMovie = async () => {
        const response = await fetch(
            `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
        );
        const json = await response.json();
        // const json = await (await fetch('')).json()
        // console.log(json);

        setMovieDetail(json.data.movie);
        // console.log(movieDetail);
    };

    useEffect(() => {
        getMovie();
    }, []);

    return <h1>{movieDetail.title}</h1>;
}

export default Detail;
