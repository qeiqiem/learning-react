import React from "react";
import { useState, useEffect } from "react";

function App() {
    const [toDo, setToDo] = useState("");
    const [toDos, setToDos] = useState([]); // 여길 배열로 입력하지 않고 ""로 입력해서 map에 오류가 남. 배열로 인식을 못 해서..
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if (toDo === "") {
            return;
        }
        setToDos((curArry) => [toDo, ...curArry]); // 배열에 현재 state값을 추가해줌
        setToDo("");
    };
    console.log(toDos);

    return (
        <div>
            <h1>TO DOS ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    placeholder="WRITE YOUR TO DOs"
                    value={toDo}
                    onChange={onChange}
                ></input>
                <button>add</button>
            </form>
            <hr />
            <ul>
                {toDos.map(
                    (
                        item,
                        index //map의 함수
                    ) => (
                        <li key={index}>{item}</li> //React에서 list에 key값을 요구함
                    )
                )}
            </ul>
        </div>
    );
}

export default App;
