const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
    {
        userFrom: {
            type: Schema.Types.ObjectId,
            ref: "User",
            // ObjectId로 해당 유저에 관한 정보를 모두 가져올 수 있음
        },
        movieId: {
            type: String,
        },
        movieTitle: {
            type: String,
        },
        moviePost: {
            type: String,
        },
        movieRunTime: {
            type: String,
        },
    },
    { timestamps: true } // 생성시간 자동처리
);

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
