import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    // Link,
} from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import NavBar from "./components/views/NavBar/NavBar";
import Footer from "./components/views/Footer/Footer";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
            </Routes>
            <Routes>
                <Route path="/login" element={<LoginPage />}></Route>
            </Routes>
            <Routes>
                <Route
                    path="/register"
                    element={<RegisterPage />}
                ></Route>
            </Routes>
            <Routes>
                <Route path="/nav" element={<NavBar />}></Route>
            </Routes>
            <Routes>
                <Route path="/footer" element={<Footer />}></Route>
            </Routes>
        </Router>
    );
}

export default App;
