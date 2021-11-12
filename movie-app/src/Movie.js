// import  from "react";
import PropTypes from "prop-types";

function Movie({ title, coverImg, genres, runtime, summary }) {
    return (
        <div>
            <h2>{title}</h2>
            <img src={coverImg} alt={title} />
            <p>
                <strong>Jenres </strong>
                {genres.map((g) => g).join(" | ")}
                {/* {genres.map((g) => (
            <span key={g}> | {g}</span>
        ))} */}
            </p>
            <ul>
                <li>{runtime} mins</li>
                <li>{summary}</li>
            </ul>
        </div>
    );
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
