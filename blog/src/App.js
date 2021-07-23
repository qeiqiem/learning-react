import logo from "./logo.svg";
import "./App.css";

function App() {
    let posts = "맛집리스트";
    return (
        <div className="App">
            <div className="navbar">
                <div>D-Blog</div>
            </div>
            <h3> {posts} </h3>
        </div>
    );
}

export default App;
