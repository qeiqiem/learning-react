import React, { useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
    useEffect(() => {
        axios.post("/api/product/products").then((response) => {
            if (response.data.success) {
                // 오타주의!!!!!
                console.log(response.data);
            } else {
                alert("landing data failed");
            }
        });
    }, []);

    return <div>landing</div>;
};

export default LandingPage;
