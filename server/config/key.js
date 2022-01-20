// deploy 이후 모드 분기 시점... production or dev

if (process.env.NODE_ENV === "production") {
    module.exports = require("./prod");
} else {
    module.exports = require("./dev");
}
