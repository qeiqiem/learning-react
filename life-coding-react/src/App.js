import React, { Component } from "react"; // class type
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import Content from "./components/Content";
import "./App.css";

// ********* function type *********
// import React from "react";

// function App() {
//     return <div className="App"></div>;
// }
/**
// ********* class type *********
// App라는 이름의 태그로 정의함
class App extends Component {
    // class 이름은 항상 대문자로
    render() {
        //render() : class가 가진 메서드. class안에 소속된 함수는 function 생략 가능.
        // ex) __function__ render() {}
        return (
            <div className="App">
                <div>HELLO!</div>
            </div>
            // return안에서는 반드시 하나의 최상위 태그가 모든 태그를 감싸는 형태로 존재해야 한다.
            // ex) 
            //  <div className="App"> 
            //     <div>
            //         <div>
            //             <div></div>
            //         </div>
            //     </div>
            //     <div>
            //         <div></div>
            //     </div>
            //     <div></div>
            // </div>
              
        );
    }
}
*/

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject title="WEB" sub="Word Wide Web" />
                <Subject title="React" sub="ReactJs For Web" />
                <TOC />
                <Content
                    title="HTML"
                    desc="HTML is HyperTextMarkupLanguage."
                />
            </div>
        );
    }
}

export default App;
