/* 
파일전송 처리를 위해 index.js에서 라우트를 생성해도 되지만
그렇게 되면 index.js (최초 실행시) 너무 많은 코드를 실행해야 함
==> route폴더에서 분기하여 처리
(user.js와 같은 로직으로 처리)

*/

const express = require("express");
const router = express.Router();

//=================================
//             Product
//=================================

/* 
이미 index.js에서 아래 url을 타고 왔기 때문에 

FileUpload.js처럼 루트를 모두 적을 필요없이
   axios
        .post("api/product/image", formData, config)


/image 루트만 남겨 놓으면 된다. + request handler..
        */
router.post("/image", (req, ress) => {
    // 가져온 이미지를 저장 -> multer 라이브러리 사용
    // multer는 서버 dependency기 때문에 client단이 아닌 root에서 받아야 한다. npm install multer --save
});

module.exports = router;
