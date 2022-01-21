/* 
파일전송 처리를 위해 index.js에서 라우트를 생성해도 되지만
그렇게 되면 index.js (최초 실행시) 너무 많은 코드를 실행해야 함
==> route폴더에서 분기하여 처리
(user.js와 같은 로직으로 처리)
*/
const express = require("express");
const router = express.Router();
const multer = require("multer");
// Product.js model import
const { Product } = require("../models/Product");

//=================================
//             Product
//=================================

var storage = multer.diskStorage({
    //  파일 저장 경로
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    //  파일이름
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    },
});

var upload = multer({ storage: storage }).single("file");

//=================================
//             Product
//=================================

/* 
이미 index.js에서 아래 url을 타고 왔기 때문에 
/image 루트만 남겨 놓으면 된다. 
 */
router.post("/image", (req, res) => {
    // 가져온 이미지를 저장 -> multer 라이브러리 사용
    // multer는 서버 dependency기 때문에 client단이 아닌 root에서 받아야 한다. npm install multer --save

    /* 
    multer 모듈에 따른 로직으로 이름 경로가 정해진다.
    ex) res > req > file > path .. 이런 경로로 해당 정보들이 저장되어 있고,
    path를 가져오기 위해서 res.req.file.path 이렇게 접근한 것
    */
    upload(req, res, (err) => {
        if (err) {
            // 에러발생
            return res.json({ success: false, err });
        }
        return res.json({
            success: true,
            // 성공 -> 파일정보전달
            filePath: res.req.file.path,
            fileName: res.req.file.filename,
        });
    });

    //     이렇게 back -> front 로 정보 전달
});

router.post("/", (req, res) => {
    /*     index.js에서 라우트타고 옴
    UploadProductPage.js의 onSubmit()처리하기 위함 
    -> onSubmit URL은 Axios.post("/api/product", body)이니까 /로 설정
    */
    //
    // 받아온 정보를 db에 넣어준다.
    const product = new Product(req.body);
    product.save((err) => {
        if (err) return res.status(400).json({ success: false, err });
        return res.status(200).json({ success: true });
    });
});

module.exports = router;
