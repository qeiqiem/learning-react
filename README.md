# Learning React

## References

### 📂 **blog**

코딩애플 [리액트 블로그 프로젝트 만들기](https://www.youtube.com/watch?v=nahwuaXmgt8&list=PLfLgtT94nNq1e6tr4sm2eH6ZZC2jcqGOy&index=2&ab_channel=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C)

<hr>

### Basic

0. vscode, terminal 이용

    - 작업할 폴더 생성 후 폴더 열고 terminal open

1. node.js 설치

    - node.js **create-react-app** 라이브러리를 사용해서 리액트 설치하기 위함
    - node.js를 설치하면 npm이라는 툴을 이용할 수 있고, npm으로 create-react-app을 이용할 수 있다

2. 리액트 프로젝트 생성

    - **npx create-react-app 프로젝트이름** → enter
    - fetch 실행 .... → 설치 완료
    - open folder → 프로젝트이름 folder

3. Live Server처럼 실시간으로 미리보기

    - terminal에 **npm start**

4. folders

    - node_modules
      라이브러리를 모아놓은 폴더

    - public
      frame역할... (내 생각)  
      static 파일 보관함 (변하지 않는 틀)
      public > index.html이 큰 틀,  
      src > index.js가 보이는 대로 동작 실행

    - src
        - App.js : 메인페이지의 HTML역할을 하는 파일
        - package.json : 설치한 라이브러리 목록
