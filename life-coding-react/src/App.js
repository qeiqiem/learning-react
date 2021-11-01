import React, { Component } from "react"; // class type
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

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>WEB</h1>
                WORLD WIDE WEB
            </header>
        );
    }
}

class TOC extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <a href="1.html">HTML</a>
                    </li>
                    <li>
                        <a href="2.html">CSS</a>
                    </li>
                    <li>
                        <a href="3.html">JAVASCRIPT</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

class Content extends Component {
    render() {
        return <article>HTML is HyperTextMarkupLanguage.</article>;
    }
}

//////////////////////////////////////////////////

class App extends Component {
    render() {
        return (
            <div className="App">
                <Subject />
                <TOC />
                <Content />
            </div>
        );
    }
}

export default App;
