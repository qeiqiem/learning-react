import React, { Component } from "react";

class ReadContent extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </article>
        );
    }
}
// 컴포넌트는 데이터를 만드는 로직.
// 건들지 않는다.
export default ReadContent;
