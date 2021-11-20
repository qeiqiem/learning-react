const express = require("express");
const router = express.Router();
const { Favorite } = require("../models/Favorite");

/* index.js에서 설정을 해 줬기 때문에 full api 주소를 안 써도 된다.
app.use("/api/favorite", require("./routes/favorite")); 

-> Router을 사용해서 index.js에 모든 코드를 적지 않아도 되도록...
분할시켜 주는 것
*/

// post방식으로 favorite에서 연결했기 떄문에 router.post
router.post("/favoriteNumber", (req, res) => {
    //mongoDB에서   favorite 숫자를 가져오기
    Favorite.find({ movieId: req.body.movieId }).exec((err, info) => {
        if (err) return res.status(400).send(err);
        // 그다음에   프론트에  다시   숫자 정보를 보내주기
        res.status(200).json({
            success: true,
            favoriteNumber: info.length,
        });
    });
});

module.exports = router;
