/* eslint-disable*/
// 에러 안 뜨게 함

import React, { useState } from "react"; // react의 내장함수
// import logo from "./logo.svg";
import "./App.css";

function App() {
    let [area, editArea] = useState(["마포구", "강남구", "성북구"]);
    let [title, editTitle] = useState(["카페", "맛집", "쇼핑"]);

    return (
        <div className="App">
            <div className="navbar">
                <div>D-Blog</div>
            </div>

            {/* state사용 */}
            <div className="list">
                <h3>{area[0] + title[0]}</h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3>{area[1] + title[2]}</h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3>{title[2]}</h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
        </div>
    );
}

export default App;
