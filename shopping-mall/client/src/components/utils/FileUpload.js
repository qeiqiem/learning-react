// utils folder => 여러 곳에서 쓰일 수 있는 컴포넌트 조합 폴더
import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import styled from "styled-components";
import axios from "axios";

const DropContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const DropBox = styled.div`
    width: 300px;
    height: 240px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const onDrop = (files) => {
    // 파일을 넘겨줄 때는 axios를 사용해서 넘겨준다 axios를 사용해서 넘겨준다 -> 상단에 axios import

    /* 
    원래 보통 데이터를 전송할 때는 json 형식으로 서버에 전달을 해줍니다. 
    하지만 파일이나 이미지를 전송해야할 때는 *formData*를 이용할 수 있다.
    ==> 전송포맷이 json X , <form>의 형식

    1. let formData ==> form 객체 생성
    2. key, value (file, file[0]) 삽입하여 append
    3. 서버에 전송 (axios)

*/
    let formData = new FormData();
    const config = {
        header: { "content-type": "multipart/form-data" },
    }; // 백엔드 에러없이 정보받기 위함
    formData.append("file", files[0]); //file추가

    // axios post request. formData, config를 같이 추가해서 넣어줘야 백엔드 에러가 안남.
    // post로 보내고(.then) response로 정보를 받아오면
    axios
        .post("api/product/image", formData, config)
        .then((response) => {
            if (response.data.success) {
                // 1) front : ~ post ==> front 처리
                // 2) back : post로 전송하고 난 후 이제 back 처리를 해야 함 (라우트를 만들면 됨)
                /*  node 부분 server -> index.js  */
            } else {
                alert("파일 저장에 실패했습니다.");
            }
        });
};
export default function FileUpload() {
    return (
        <DropContainer>
            {/* https://www.npmjs.com/package/react-dropzone */}
            <Dropzone onDrop={onDrop}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <DropBox {...getRootProps()}>
                            <input {...getInputProps()} />
                            {/* antd + 아이콘 가져오기 */}
                            <Icon
                                type="plus"
                                style={{ fontSize: "3rem" }}
                            />
                        </DropBox>
                    </section>
                )}
            </Dropzone>
        </DropContainer>
    );
}

/* rafc ==> arrow func !!!!!!!
import React from 'react';

export const FileUpload = () => {
  return <div></div>;
}; */
