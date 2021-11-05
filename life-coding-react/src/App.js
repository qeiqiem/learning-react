import React, { Component } from "react"; // class type
import Subject from "./components/Subject";
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent";
import CreateContent from "./components/CreateContent";
import UpdateContent from "./components/UpdateContent";
// import DeleteContent from "./components/DeleteContent";
import Control from "./components/Control";
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
        this.max_content_id = 3;
        // 객체값으로 한 이유는 ui영향 안주기 때문에 state값으로 안적음. 렌더링 시 비효율
        this.state = {
            // state 초기화
            mode: "create",
            selected_content_id: 2,
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
    getReadContent() {
        let i = 0;
        while (i < this.state.contents.length) {
            const data = this.state.contents[i];
            if (data.id === this.state.selected_content_id) {
                return data;
                break;
            }
            i += 1;
        }
    }
    getContent() {
        let _title,
            _desc,
            _article = null;

        if (this.state.mode === "welcome") {
            _title = this.state.welcome.title;
            _desc = this.state.welcome.desc;
            // 기존 아티클 내용
            _article = <ReadContent title={_title} desc={_desc} />;
        } else if (this.state.mode === "read") {
            const _content = this.getReadContent();
            _article = (
                <ReadContent
                    title={_content.title}
                    desc={_content.desc}
                />
            );
            //
            /** getReadContent 없을 때 
            let i = 0;
            while (i < this.state.contents.length) {
                const data = this.state.contents[i];
                if (data.id === this.state.selected_content_id) {
                    _title = data.title;
                    _desc = data.desc;
                    break;
                }
                i += 1;
            }
            _article = <ReadContent title={_title} desc={_desc} />;// mode:read 일때도 내용이 표기되어야하기 때문
            */
        } else if (this.state.mode === "create") {
            _article = (
                <CreateContent
                    onSubmit={function (_title, _desc) {
                        // 새로운 컨텐츠값 추가
                        // console.log(_title, _desc);
                        this.max_content_id += 1;
                        // this.state.contents.push({
                        //     id: this.max_content_id,
                        //     title: _title,
                        //     desc: _desc,
                        // });
                        const _contents = this.state.contents.concat({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc,
                        });
                        // console.log(this.state.contents); //원본값
                        // console.log(_contents); //concat값
                        /**
                         * push VS concat
                         * push를 쓸 때 주의할 사항 :
                         *      푸시는 원본을 바꾼다.
                         * concat은 원본은 유지한 채 새로운 결과를 반환할 수 있다.
                         */
                        this.setState({
                            // contents: this.state.contents,
                            contents: _contents,
                        });
                    }.bind(this)}
                />
            );
        } else if (this.state.mode === "update") {
            const _content = this.getReadContent();
            _article = (
                <UpdateContent
                    data={_content}
                    onSubmit={function (_title, _desc) {
                        this.max_content_id += 1;
                        const _contents = this.state.contents.concat({
                            id: this.max_content_id,
                            title: _title,
                            desc: _desc,
                        });
                        this.setState({
                            contents: _contents,
                        });
                    }.bind(this)}
                />
            );
        }
        return _article;
    }
    render() {
        return (
            <div className="App">
                <Subject
                    title={this.state.subject.title}
                    sub={this.state.subject.sub}
                    onChangePage={function () {
                        this.setState({ mode: "welcome" });
                    }.bind(this)}
                />

                {/* <header>
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
                </header> */}

                <TOC
                    onChangePage={function (id) {
                        // debugger;
                        this.setState({
                            mode: "read",
                            // selected_content_id: id, ->안되는 이유 : id의 값은 string.. 그래서 number로 변환시켜야 한다.
                            selected_content_id: Number(id),
                        });
                    }.bind(this)}
                    data={this.state.contents}
                />
                <Control
                    onChangeMode={function (_mode) {
                        this.setState({
                            mode: _mode,
                        });
                    }.bind(this)}
                />
                {/* <ReadContent title={_title} desc={_desc} /> */}
                {this.getContent()}
            </div>
        );
    }
}

export default App;
