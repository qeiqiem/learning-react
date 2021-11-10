import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [counter, setCounter] = useState(0);
    const [keyword, setKeyword] = useState("");
    const onClick = () => setCounter((cur) => cur + 1);
    const onChange = (e) => setKeyword(e.target.value);

    useEffect(() => {
        console.log("once");
    }, []);

    useEffect(() => {
        console.log("key");
    }, [keyword]);

    useEffect(() => {
        console.log("click");
    }, [counter]);

    useEffect(() => {
        console.log("keyword or click");
    }, [keyword, counter]); // 둘 중 하나가 실행될 떄

    return (
        <div>
            <input
                value={keyword}
                onChange={onChange}
                type="text"
                placeholder="search..."
            />
            <button onClick={onClick}>click</button>
        </div>
    );
}

export default App;
