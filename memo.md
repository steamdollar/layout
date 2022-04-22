# webpack

webpack에 대해 더 알아보자.

nodejs > npm로 패키기 쉽게 설치 가능

npm init -y
npm i react react-dom
npm i -D webpack webpack-cli

파일 생성
webpack.config.js

디렉토리 생성
mkdir src dist

template > html 생성 (index.html)
html ,script 내용 입력

    <div id="root"></div>
    <script type="text/javascript" src="./dist/bundle.js">

    </script>

src 디렉토리 내에서 index.jsx 

////////////

바벨은 React 만든 놈이 만든게 아니라

Webpack, babel을 연결해주는 라이브러리,
예전 브라우저에서도 구동할 수 있게 코드 바꿔주는 바벨 필요,
JSX 를 사용할 있는 바벨 필요

총 3개..

npm i -D babel-loader
npm i -D @babel/preset-env
npm i @babel/preset-react

respectively..

npm i -D babel-loader @babel/preset-env @babel/preset-react

////////////////

# devServer

1개 html, 1개 JS

src 폴더 안에서 코드를 수정 
> bundle 재생성

1. 웹 서버 구축해준다..
> index.html

src 폴더 안에서 코드 수정을 감지시자동으로 서버 재시작, 번들 재생성

개발시에만 사용..

npm i -D webpack-dev-server
// 서버 구축 코드이므로 하나의 port를 차지함
// 실행할 수 있는 명령어를 넣어야 한다.

package.json > dev에 추가..

webpack.config.js

npm i html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin')

npm install -D @pmmmwh/react-refresh-webpack-plugin

const webpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

npm i -D react-refresh

//////////

css 처리를 위한 라이브러리

npm i -D mini-css-extract-plugin css-loader

style-loader : react에서 lnline 형태로 스타일링 하게 해주는거..
css-loader

mini-css-extract-plugin : style element 를 인식해 적용될 수 있도록..
webpack은 nodejs 환경이므로..
webpack을 import 해서 번들에 포함되도록..

////////////////////

세팅은 끝, 사용 방법을 배우자.

css를 import 하는 방법
asset에 a, b..
단점으로 css가 꼬이는 경우가 발생함

css.module 만드는 방법
App.module.css (컴포넌트랑 동일하게 이름을 지정하는게 보통이다)
똑같이 하면 이상하게 값이 암호화가 되어서 네트워크 탭에 나온다..
= 같은 .colors를 쓰더라도 겹치지 않는다.
각각의 스타일링이 안 겹쳐서 css가 꼬일일이 없다.

style-component 만드는 방법 (가장 많이 사용)
아예 css를 먹인 component를 만든다.

npm i styled-component

스토리북

////////////////////////////////////////////////
4/21  children, 생명주기 (life cycle) 에 대해 알아보자.

전자는 별거 아닌데 후자쪽은 좀 어려울 수 있다..

App > Comment > form, list

self closing으로 쓰는 경우와 그렇지 않은 경우..

그 중에서도 후자처럼 쓸 때 그 안에 children이 들어간다.

<Comment> </Comment> 안에 넣으면 됨..

//////////

life cycle - 컴포넌트가 생기는 주기 조절

컴포넌트가 생기는 시점?

웹펙 데브 서버는 막 조작하기가 힘들다.. 웹패 쓴거라..

그래서 DB나 백서버랑 직접 통신을 해야함. axios등을 써서..

생명주기 함수는 크게 2가지가 있다.

원래 6개였는데 많이 쓰는게 2개 밖에 없어서 다 사장됨

ㅁ튼 많이 쓰는것 중 하나가

componentDidMount() {}

컴포넌트 안에서 이 함수를 만들어놓기만 하면 된다.

addEventListener.DOMContentLoaded랑 비슷하다..

aync, await는 여기서 못 쓰고 쓰려면

함수를 하나 async로 만들고 didmont 안에서 호출하면 된다.

//////////////

댓글 수정 > CommentList에서 content를 span으로 한 번 더 wrap한다.

제목을 클릭하면 input box로 바꾸고 싶다.

컴포넌트의 일부에만 그런 트리거를 추가 하고 싶은게 바로 그 span에서 시작된다.

span 클릭 시 안에 들어가있는 내용을 출력하기부터 시작하자

이제 updateFlag를 붙일거다.

updateFlag: true

클릭시마다 이걸 바꾸는 함수, t/f에 따라 span/input 이 바뀌는걸 추가

클릭시 commentList의 state에 저장을 시킨다.

update에는 key값을 클릭시마다 줘서 어떤걸 바꿀지 지정

https://proglish.tistory.com/216
