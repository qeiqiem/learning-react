import React from "react";
import { Descriptions, Badge } from "antd";

function MovieInfo(props) {
    let { movie } = props; // === let movie = props.movie

    return (
        <Descriptions title="Movie Info" bordered>
            <Descriptions.Item label="Title">
                {movie.original_title}
            </Descriptions.Item>
            <Descriptions.Item label="Release Date">
                {movie.release_date}
            </Descriptions.Item>
            {/* <Descriptions.Item label="revenue">
                {movie.revenue}
            </Descriptions.Item> */}
            <Descriptions.Item label="Runtime">
                {movie.runtime} mins
            </Descriptions.Item>
            <Descriptions.Item label="Raiting">
                {movie.vote_average}
            </Descriptions.Item>
            {/* <Descriptions.Item label="vote_count">
                {movie.vote_count}
            </Descriptions.Item>
            <Descriptions.Item label="status">
                {movie.status}
            </Descriptions.Item>
            <Descriptions.Item label="popularity">
                {movie.popularity}
            </Descriptions.Item> */}
        </Descriptions>
    );
}

export default MovieInfo;
