import React from "react";
import styled from "styled-components";

const UploadDiv = styled.div`
    max-width: 700px;
    margin: 2rem auto;
`;

const Header = styled.h2`
    text-align: center;
    margin-botton: 2rem;
`;

function UploadProductPage() {
    return (
        <UploadDiv>
            <div>
                <Header>여행상품 업로드</Header>
            </div>
            <form>
                {/* drop zone */}
                <br />
                <br />
                <label>이름</label>
                <input />
                <br />
                <br />
                <label>설명</label>
                <textarea></textarea>
                <br />
                <br />
                <label>가격 ($)</label>
                <input />
                <br />
                <br />
                <select>
                    <option></option>
                </select>
                <br />
                <br />
                <button>확인</button>
            </form>
        </UploadDiv>
    );
}

export default UploadProductPage;
