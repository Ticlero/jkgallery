import React from 'react';
import ReactDom from 'react-dom';
import JKGallery from './jkgallery.jsx';
import './index.css';
//jsx를 처리해주기 위해 babel을 설치
//npm i -D@babel/core babel의 핵심 부품
//npm i -D@babel/preset-env 내 브라우저의 맞게 최신문법을 옛날 문법으로 자동
//npm i -D@babel/preset-react jsx 지원
//npm i babel-loader babel과 webpack을 연결

ReactDom.render(<JKGallery />, document.querySelector("#root"));