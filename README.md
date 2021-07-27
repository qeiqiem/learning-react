# Learning React

> Organize Theories of React and Make Mini-Application </br>Every detail about the applications is in each folder. _각 프로젝트 폴더에 상세 설명을 첨부합니다._

## References

-   ### 📂 **blog**

    코딩애플 _리액트 블로그 프로젝트 만들기_

-   ### 📂 [**movie-app**](https://github.com/qeiqiem/learning-react/tree/main/movie-app)

    Nomad Coders _ReactJS로 영화 웹 서비스 만들기_

<hr>
  
## 0. Setting
1. node.js 설치
2. editor(ex. vscode), terminal
3. create apps
4. coding

0.  vscode, terminal 이용

    -   작업할 폴더 생성 후 폴더 열고 terminal open

1.  node.js 설치

    -   node.js **create-react-app** 라이브러리를 사용해서 리액트 설치하기 위함
    -   node.js를 설치하면 npm이라는 툴을 이용할 수 있고(같이 다운로드 됨),  
        npm으로 create-react-app을 이용할 수 있다

2.  리액트 프로젝트 생성

    -   **npx create-react-app 프로젝트이름** → enter
    -   fetch 실행 .... → 설치 완료
    -   open folder → 프로젝트이름 folder

3.  Live Server처럼 실시간으로 미리보기

    -   terminal에 **npm start**

4.  App.js에 코딩하기

    -   react는 JSX를 사용
    -   App.js의 App()함수에 html처럼 코딩하면 됨
    -   class이름을 주고 싶으면 className(예약어)로 설정해야 흠

## 1. Why React?

-   빠르다.

    -   react는 빈 html을 로드하기 떄문에 처음에 빠르게 로딩이 가능하다. js가 모든 요소를 생성해 만들고 html에 push한다.

-   html보다 데이터 바인딩이 편리하다. (Angular, Vue도 마찬가지)

        👀 데이터 바인딩?
        데이터를 가져와서 변수에 저장하고 HTML에 꽂아 넣는 작업

    javascript에서 데이터바인딩 :  
    `document.getElementById("sth").innerText = "abc";`  
    => 라이브러리 사용보다는 번거롭다.

```javascript
import img from './img.jpg';

function App(){
let posts = '맛집 리스트';
function func(){
  return 100
}
.
.
.
<h1> { posts }</h1>
<h1> { func() }</h1>
<img src = { img } />
}
// 변수를 넣기만 하면 적용된다.
// 심지어 클래스이름도 {} 변수로 적용가능하다.
```

## 2. Basic Theory

### Component

### JSX

### State / 변수

<!-- 수정필요 -->

-   데이터 바인딩을 위해 사용하는 두 가지 방법

    1. 변수에 담기

    ```javascript
    let posts = "맛집 리스트";
    ```

    2. state로 담아 호출

    ```javascript
    import React, { useState } from "react"; // react의 내장함수

    useState("마포구 맛집 추천");
    /* 이렇게 선언하면 이 자리에 [a, b] 변수가 2개 담은 array가 남는다.
     a == "마포구 맛집 추천"
     b == a를 수정하기 위한 함수 */

    // 새로 추가된 ES6 문법에 따라 아래처럼 사용이 가능하다.
    let [a, b] = [10, 100];
    // ==> let a = 10;
    //     let b = 100;

    // let [a, b] = useState("sth")
    let [title, editTitle] = useState("마포구 맛집 추천");
    let [title2, editTitle2] = useState("마포구 맛집 추천2");
    let [title3, editTitle3] = useState(["마포구", "카페"]);

    return (
        <div className="App">
            <div className="navbar">
                <div>D-Blog</div>
            </div>

            {/* 변수사용 */}
            <div className="list">
                <h3> {posts} </h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>

            {/* state사용 */}
            <div className="list">
                <h3> {title} </h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3> {title2} </h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3> {title3} </h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
            <div className="list">
                <h3> {title3[0]} </h3>
                <p>7월 24일 발행</p>
                <hr />
            </div>
        </div>
    );
    ```

-   State를 쓰는 이유?
    웹이 App처럼 동작하게 만들 수 있기 때문

    -   변수 : 값이 변경되면 새로고침을 해야 재렌더링이 된다.
    -   state : 자동으로 재렌더링이 된다. (라이브서버처럼 실시간 변동 확인 가능)

-   바뀔 일이 거의 없는 데이터는 변수에 담거나 하드 코딩을 해도 괜찮다.

-   자주 바뀌는 데이터의 경우 state에 저장하는게 용이하다.

### CSS 사용

-   html처럼 `<div style="">`은 적용이 불가하다. (js문법과 겹칠 수 있기 때문에)
-   때문에 **object** 타입으로 써야 한다.

```html
<div style={{ color: "blue", fontSize: "30px" }}> </div>
```

-   font-size도 js문법에서 -연산자이기 때문에 camel case로 씀
-   {color : 'blue', fontSize : '30px'} 이 자체를 변수에 저장해서 이용하거나
-   클래스로 저장해서 사용함
