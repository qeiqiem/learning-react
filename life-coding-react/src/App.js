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
    constructor(props) {
        super(props);
        // state값을 초기화시킴. component 초기화.
        // constructor 안에 코드를 짠다.
        // component 실행 시 render()전에 constructor()이 먼저 실행되어 초기화를 담당한다.
        this.state = {
            // state 초기화
            mode: "read",
            welcome: { title: "Welcome!", desc: "Hi, React." },
            subject: { title: "WEB", sub: "World Wide Web" },
            contents: [
                {
                    id: 1,
                    title: "HTML",
                    desc: "HTML is Hyper Text Mark-up Language... ",
                },
                {
                    id: 2,
                    title: "CSS",
                    desc: "CSS is for design...",
                },
                {
                    id: 3,
                    title: "JavaScript",
                    desc: "JavaScript is for interaction",
                },
            ],
        };
    }
    render() {
        let _title,
            _desc = null;
        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
        } else if (this.state.mode === "read") {
            _title = this.state.contents[0].title;
            _desc = this.state.contents[0].desc;
        }
        return (
            <div className="App">
                {/* <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                /> */}
                <header>
                    <h1>
                        <a
                            href="/"
                            onClick={function (e) {
                                e.preventDefault();
                                // this.state.mode = "welcome";
                                this.setState({
                                    mode: "welcome",
                                });
                            }.bind(this)}
                        >
                            {this.state.subject.title}
                        </a>
                    </h1>
                    <p>{this.state.subject.sub}</p>
                </header>
                <TOC data={this.state.contents} />
                <Content title={_title} desc={_desc} />
            </div>
        );
    }
}

export default App;
