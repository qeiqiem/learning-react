import React from "react";
import { Icon, Col, Card, Row, Carousel } from "antd";

const ImageSlider = (props) => {
    return (
        <div>
            <Carousel autoplay>
                {props.images.map((image, idx) => (
                    <div key={idx}>
                        <img
                            style={{
                                width: "100%",
                                maxHeight: "200px",
                            }}
                            src={`http://localhost:5000/${image}`}
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageSlider;
