// utils folder => 여러 곳에서 쓰일 수 있는 컴포넌트 조합 폴더
import React from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import styled from "styled-components";

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

export default function FileUpload() {
    return (
        <DropContainer>
            {/* https://www.npmjs.com/package/react-dropzone */}
            <Dropzone
                onDrop={(acceptedFiles) => console.log(acceptedFiles)}
            >
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
