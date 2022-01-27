import React, { useState, useEffect } from "react";
import axios from "axios";

/* styles */
// import styled from "styled-components";
import { Icon, Col, Card, Row } from "antd";
import Meta from "antd/lib/card/Meta";

const LandingPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.post("/api/product/products").then((res) => {
            if (res.data.success) {
                // 오타주의!!!!!
                console.log(res.data);
                setProducts(res.data.productInfo);
            } else {
                alert("failed loading landing data");
            }
        });
    }, []);

    const renderCards = products.map((product, idx) => {
        console.log("product", product);
        return (
            <Col lg={6} md={8} xs={24} key={idx}>
                <Card
                    cover={
                        <img
                            style={{
                                width: "100%",
                                // height: "150px",
                                maxHseight: "150px",
                            }}
                            src={`http://localhost:5000/${product.images[0]}`}
                        />
                    }
                >
                    <Meta
                        title={product.name}
                        description={`$${product.price}`}
                    />
                </Card>
            </Col>
        );
    });

    return (
        <div style={{ width: "75%", margin: "3rem auto" }}>
            <div style={{ textAlign: "center" }}>
                <h2>
                    Let's Travel <Icon type="rocket" />
                </h2>
            </div>

            {/* filter */}

            {/* search */}
            {/* cards */}
            <Row gutter={(16, 16)}>{renderCards}</Row>
        </div>
    );
};

export default LandingPage;
