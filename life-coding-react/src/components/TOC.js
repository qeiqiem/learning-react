import React, { Component } from "react";

class TOC extends Component {
    shouldComponentUpdate(newProps, newState) {
        // console.log(newProps.data, this.props.data);
        if (this.props.data === newProps.data) {
            // console.log("should TOC");
            return false;
            // data 변하지 않았다면 render함수를 그리지 마라. (불필요하니)
        }
        return true;
    }
    render() {
        // console.log("TOC render");
        let i = 0;
        let lists = [];
        const data = this.props.data;
        while (i < data.length) {
            lists.push(
                // key :react 오류 방지를 위해 필요한 값
                <li key={data[i].id}>
                    {/* <a href={"/content"+data[i].id}> */}
                    <a
                        href={`"/content" ${data[i].id}`}
                        data-id={data[i].id}
                        onClick={function (e) {
                            // debugger;
                            e.preventDefault();
                            // console.log(e.target.dataset.id);
                            this.props.onChangePage(
                                e.target.dataset.id
                            );
                        }.bind(this)}

                        /**  2번째 방법 : 속성값 없이 bind로 해결
                        href={`"/content" ${data[i].id}`}
                        onClick={function (id, e) {
                            e.preventDefault();
                            this.props.onChangePage(id);
                        }.bind(this, data[i].id)}
                        // 바인드의 두번째 인자 값을 함수의 첫번째 매개변수 값으로 넣어줌
                        */
                    >
                        {data[i].title}
                    </a>
                </li>
            );
            i += 1;
        }

        return (
            <nav>
                <ul>{lists}</ul>
            </nav>
        );
    }
}

export default TOC;
