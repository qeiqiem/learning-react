# Learning React

## References

### 📂 **blog**

코딩애플 [리액트 블로그 프로젝트 만들기](https://www.youtube.com/watch?v=nahwuaXmgt8&list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy&index=2&ab_channel=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C)

<hr>
  
## 1. Setting

0.  vscode, terminal 이용

-   작업할 폴더 생성 후 폴더 열고 terminal open

1.  node.js 설치

-   node.js **create-react-app** 라이브러리를 사용해서 리액트 설치하기 위함
-   node.js를 설치하면 npm이라는 툴을 이용할 수 있고, npm으로 create-react-app을 이용할 수 있다

2.  리액트 프로젝트 생성

-   **npx create-react-app 프로젝트이름** → enter
-   fetch 실행 .... → 설치 완료
-   open folder → 프로젝트이름 folder

3.  Live Server처럼 실시간으로 미리보기

-   terminal에 **npm start**

4.  App.js에 코딩하기

-   reactsms JSX를 사용
-   App.js의 App()함수에 html처럼 코딩하면 됨
-   class이름을 주고 싶으면 className(예약어)로 설정해야 흠

```javascript
<div className="App"> </div>
```

## 2. Basic Theory

### folders

-   node_modules  
    라이브러리를 모아놓은 폴더

-   public  
    frame역할... (내 생각)

    static 파일 보관함 (변하지 않는 틀)
    public > index.html이 큰 틀,
    src > index.js가 보이는 대로 동작 실행

-   src
    -   App.js : 메인페이지의 HTML역할을 하는 파일
    -   package.json : 설치한 라이브러리 목록

### Why react?

-   html보다 데이터 바인딩이 편리하다. (Angular, Vue도 마찬가지)

        👀 데이터 바인딩?
        데이터를 가져와서 변수에 저장하고 HTML에 꽂아 넣는 작업

    javascript에서 데이터바인딩 :  
    document.getElementById("sth") ~ innerText..  
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

### CSS 사용

-   html처럼 `<div style="">`은 적용이 불가하다. (js문법과 겹칠 수 있기 때문에)
-   때문에 **object** 타입으로 써야 한다.

```html
<div style={{ color: "blue", fontSize: "30px" }}> </div>
```

-   font-size도 js문법에서 -연산자이기 때문에 camel case로 씀
-   {color : 'blue', fontSize : '30px'} 이 자체를 변수에 저장해서 이용하거나
-   클래스로 저장해서 사용함

### 변수가 아니라 state
