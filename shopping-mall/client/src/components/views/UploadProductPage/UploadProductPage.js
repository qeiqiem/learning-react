import React, { useState } from "react";
import FileUpload from "../../utils/FileUpload";

/* styles */
import { Typography, Button, Form, Input } from "antd"; // ant design..css 프레임워크
import styled from "styled-components";
import axios from "axios";

/* 대륙 옵션 */
const Continents = [
    {
        key: 1,
        value: "아시아",
    },
    {
        key: 2,
        value: "유럽",
    },
    {
        key: 3,
        value: "아프리카",
    },
    {
        key: 4,
        value: "북아메리카",
    },
    {
        key: 5,
        value: "남아메리카",
    },
    {
        key: 6,
        value: "오세아니아",
    },
];

function UploadProductPage(props) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(null);
    const [continent, setContinent] = useState(1);
    const [images, setImages] = useState([]);

    const onChangeName = (e) => {
        setName(e.currentTarget.value);
    };

    const onChangeDescription = (e) => {
        setDescription(e.currentTarget.value);
    };
    const onChangePrice = (e) => {
        setPrice(e.currentTarget.value);
    };

    const onChangeContinent = (e) => {
        setContinent(e.currentTarget.value);
    };

    const updateImages = (newImages) => {
        setImages(newImages);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (
            !name ||
            !description ||
            !price ||
            !continent ||
            !images
        ) {
            return alert("모든 값을 입력해주세요");
        }

        // Product.js의 모델
        const body = {
            // 로그인된 사람의 아이디, auth.js에서 props로 받아옴
            writer: props.user.userData._id,
            name: name,
            description: description,
            price: price,
            images: images,
            continents: continent, //?????
        };

        // 서버에 채운 값들(위의 body값)을 req로 보내다.
        axios.post("/api/product", body).then((res) => {
            if (res.data.success) {
                alert("success");
                // 업로드 성공 후 랜딩페이지로 이동
                props.history.push("/");
            } else {
                alert("failed");
            }
        });
    };

    return (
        <UploadDiv>
            {/* styled test */}
            <Header>
                {/* styled test */}
                <Title level={2}>여행상품 업로드</Title>
            </Header>
            <Form onSubmit={onSubmit}>
                {/* drop zone */}

                {/* images state의 정보를 이곳(부모 컴포넌트)에서 알아야 서버로 img 전달이 가능하기 때문에, 여기서 prop으로 images state를 넘겨준다 
                submit -> 전달...(?) 아님 리프레시할떄마다? */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>이름</label>
                <Input onChange={onChangeName} value={name} />
                <br />
                <br />
                <label>설명</label>
                <TextArea
                    onChange={onChangeDescription}
                    value={description}
                ></TextArea>
                <br />
                <br />
                <label>가격 ($)</label>
                <Input onChange={onChangePrice} value={price} />
                <br />
                <br />
                <select
                    onChange={onChangeContinent}
                    value={continent}
                >
                    {/* 인덱스 활용해보기
                    {Continents.map((continent, idx) => (
                        <option
                            key={idx} // ==> 0부터 시작
                            value={idx + 1} // ==> 1부터 시작
                        >
                            {continent.value}
                        </option>
                    ))} */}

                    {Continents.map((c) => (
                        <option
                            key={c.key} // 1부터 시작( key에 1로 설정 )
                            value={c.key}
                        >
                            {c.value}
                        </option>
                    ))}
                </select>
                <br />
                <br />

                {/* antd Button -> func안먹혀서 button으로 변경 */}
                <button type="submit">확인</button>
            </Form>
            {/* {console.log(images)} */}
        </UploadDiv>
    );
}

/* styled-component  ==> try to test!*/
const UploadDiv = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`;
const Header = styled.h2`
    text-align: center;
    margin-botton: 2rem;
`;

/* antd */
const { Title } = Typography;
const { TextArea } = Input;

export default UploadProductPage;
