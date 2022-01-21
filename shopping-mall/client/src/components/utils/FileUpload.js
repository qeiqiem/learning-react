// utils folder => 여러 곳에서 쓰일 수 있는 컴포넌트 조합 폴더
import React, { useState } from "react";
import Dropzone from "react-dropzone";
import { Icon } from "antd";
import styled from "styled-components";
import axios from "axios";

export default function FileUpload(props) {
    /* 확인버튼(submit)으로 백엔드에 업로드한 파일을 넘겨주기 위해서 state에 저장한다. */
    const [images, setImages] = useState([]); // 이미지 여러개 올리기 때문에 복수형, array안에 str들어가게끔

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
            .post("/api/product/image", formData, config) // post url 잘못적어서 염병..api앞에../,,안붙였다..
            .then((response) => {
                if (response.data.success) {
                    // 1) front : ~ post ==> front 처리
                    // 2) back : post로 전송하고 난 후 이제 back 처리를 해야 함 (라우트를 만들면 됨)
                    /*  node 부분 server -> index.js  */
                    const newImages = [
                        ...images,
                        response.data.filePath,
                    ];
                    //spread operation (arr 모든 구성요소를 넣어준다) + 새로추가한 파일path
                    setImages(newImages);

                    // ********* 부모 컴포넌트의 images state로 값을 넘겨주기 위함
                    props.refreshFunction(newImages);

                    // console.log(response.data);
                    // back에서 준 정보 확인( success, filePath,fileName)
                } else {
                    alert("파일 저장에 실패했습니다.");
                }
            });
    };

    const onDelete = (img) => {
        const currentIdx = images.indexOf(img);
        // console.log(currentIdx); // 현재 클릭한 index를 알 수있다.
        let newImages = [...images];
        newImages.splice(currentIdx, 1);
        setImages(newImages);

        // **************** 부모 컴포넌트로 전달
        props.refreshFunction(newImages);

        /* 
        1. 이것도 되긴 됨. 하지만 images를 그대로 쓰지 않는 이유는 원본 그대로 두려고?
         images.splice(currentIdx, 1);
        setImages([...images]);


        2. 
        let newImages = [...images].splice(currentIdx, 1);
        setImages(newImages);

        이렇게 하면 클릭한 인덱스만 남고 나머지가 사라졌었음. : 즉. 삭제하려고 클릭한 인덱스가 images state로 저장됨. 왜??
        => splice의 리턴값이 클릭한 index의 값이기 때문
        
        */
    };

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
            <ImageBox>
                {/* img가 state에 하나만 있는게 아닐 수 있기 때문에 map으로 반복해준다. */}
                {images.map((img, idx) => (
                    <div key={idx} onClick={() => onDelete(img)}>
                        <img
                            src={`http://localhost:5000/${img}`}
                            style={{
                                minWidth: "300px",
                                width: "300px",
                                height: "240px",
                            }}
                        />
                    </div>
                ))}
            </ImageBox>
            {console.log(images)}
        </DropContainer>
    );
}

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

const ImageBox = styled.div`
    display: flex;
    width: 350px;
    height: 240px;
    overflow-x: scroll;
`;

//
// ====================================================
//
/* rafc ==> arrow func !!!!!!!
import React from 'react';

export const FileUpload = () => {
  return <div></div>;
}; */
