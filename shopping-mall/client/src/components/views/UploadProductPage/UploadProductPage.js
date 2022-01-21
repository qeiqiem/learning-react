import React, { useState } from "react";
import FileUpload from "../../utils/FileUpload";

/* styles */
import { Typography, Button, Form, Input } from "antd"; // ant design..css 프레임워크
import styled from "styled-components";

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

function UploadProductPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [continent, setContinent] = useState(1);
    const [image, setImage] = useState([]);

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

    return (
        <UploadDiv>
            {/* styled test */}
            <Header>
                {/* styled test */}
                <Title level={2}>여행상품 업로드</Title>
            </Header>
            <Form>
                {/* drop zone */}
                <FileUpload />
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

                    {Continents.map((continent) => (
                        <option
                            key={continent.key} // 1부터 시작( key에 1로 설정 )
                            value={continent.key}
                        >
                            {continent.value}
                        </option>
                    ))}
                </select>
                <br />
                <br />
                <Button>확인</Button>
            </Form>
            {/* {console.log(continent)} */}
        </UploadDiv>
    );
}

export default UploadProductPage;
