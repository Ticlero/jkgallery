import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema'


const app = express();
const port = 17404;
const dbName = 'testDB';
const MONGODB_URL = `mongodb+srv://admin:wkdqkdrn8172!@cluster0-9oxri.mongodb.net/${dbName}?retryWrites=true&w=majority` //mogodb cloud connect
//const express = require("express"); //express 모듈 사용 - 객체 얻기
//const path = require('path'); //Node.js 환경에서 디렉토리 주소를 다룰 때 사용

mongoose.Promise = global.Promise;// db 연결 (비동기 처리)
mongoose.connect(MONGODB_URL, {useNewUrlParser: true, //useNewUrlParser, useUnifiedTopology 찾아보기
    useUnifiedTopology: true })

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,()=>{
    console.log(`"Welecom to JKGallery Server!"
    Plz Connect http:localhost:${port}`);
})