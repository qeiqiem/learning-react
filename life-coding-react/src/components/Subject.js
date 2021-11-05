import React, { Component } from "react";

class Subject extends Component {
    render() {
        return (
            <header>
                <h1>
                    <a
                        href="/"
                        onClick={function (e) {
                            e.preventDefault();
                            this.props.onChangePage();
                        }.bind(this)}
                    >
                        {this.props.title}
                    </a>
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
