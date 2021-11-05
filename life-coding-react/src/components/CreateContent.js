import React, { Component } from "react";

class CreateContent extends Component {
    render() {
        return (
            <article>
                <h2>Create</h2>
                <form
                    action="/create_process"
                    method="post"
                    onSubmit={function (e) {
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.desc.value
                        );
                    }.bind(this)}
                >
                    <p>
                        <input
                            type="text"
                            name="title"
                            placeholder="제목을 입력하세요"
                        ></input>
                    </p>
                    <p>
                        <textarea
                            name="desc"
                            placeholder="내용을 입력하세요"
                        ></textarea>
                    </p>
                    <input type="submit" value="확인"></input>
                </form>
            </article>
        );
    }
}
// 컴포넌트는 데이터를 만드는 로직.
// 건들지 않는다.
export default CreateContent;
