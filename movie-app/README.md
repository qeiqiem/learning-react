# [ReactJS로 영화 웹 서비스 만들기](https://nomadcoders.co/react-fundamentals/)

### 1. Order

-   Basic Theory와 동일하지만 노마드는 src/App.js, index.js만 남겨두었다.

-   npm start 후 console창을 종료하면 서버도 같이 종료되니 주의해야 한다.

-   새로운 컴포넌트 생성 시, 파일 이름 첫 글자는 대문자로 시작한다.
    `src/MyComponent.js`

-   컴포넌트 js파일의 가장 처음에 항상 react를 import한다. (JSX파일로 읽기 위함)

```javascript
import React from "react";
```

### 2. component

-   html을 return하는 함수
-   react는 기본적으로 component와 동작한다. All is component!
-   react는 component를 사용해 html처럼 작성하려는 경우에 필요하다.
-   이러한 js와 html의 조합을 **JSX**라 한다. (**react에서 나온 유일한 개념**)

```javascript
// index.js
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
// 여기서 <App/>에 해당하는 부분이 component

// <App/> == App.js
function App() {
    return (
        <div className="App">
            <h1>hi! hello</h1>
        </div>
    );
}
```

-   react application은 _하나의 component_ 만 rendering한다.
    -   그 하나의 컴포넌트 ==> App.js

```javascript
// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import MyComponent from "./MyComponent";

ReactDOM.render(
    // <React.StrictMode>
    <App />,
    <MyComponent />,
    // </React.StrictMode>,
    document.getElementById("root")
);

// import MyComponent from "./MyComponent";
// <MyComponent />,
// 이렇게 추가해서 쓸 수 없다. ERROR!
```

-   고로, App.js에 import해 App.js에서 한 번에 로드하도록 한다.

```javascript
import React from "react";
import MyComponent from "./MyComponent"; // ./ == same directory

function App() {
    return (
        <div className="App">
            <h1>hi! hello</h1>
            <MyComponent />
        </div>
    );
}

export default App;
```
