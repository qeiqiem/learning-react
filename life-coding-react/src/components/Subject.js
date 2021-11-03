import React, { Component } from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a href="/">{this.props.title}</a>
                </h1>
                <p>{this.props.sub}</p>
            </header>
        );
    }
}

/** 
<h1>{this.props.title}</h1>
{this.props.sub}
==> 코드의 재사용이 가능하게 됨
*/

export default Subject;
