import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';
import schema from './graphql/schema';
import request from 'graphql-request';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import multer from 'multer';

const MongoStroe = require('connect-mongo')(session);
const app = express();
const port = 3000;
const dbName = 'userinfoTable';
const MONGODB_URL = `mongodb+srv://admin:wkdqkdrn8172!@cluster0-9oxri.mongodb.net/${dbName}?retryWrites=true&w=majority` //mogodb cloud connect
//const express = require("express"); //express 모듈 사용 - 객체 얻기
const path = require('path'); //Node.js 환경에서 디렉토리 주소를 다룰 때 사용
//const app = express();

// app.listen(3000, ()=>{
//     console.log(`Express App Start! port:3000
//     http:localhost:3000`);
// });
const multerUpload = multer({
    dest: 'upload_img/',
})
mongoose.Promise = global.Promise;// db 연결 (비동기 처리)
mongoose.connect(MONGODB_URL //useNewUrlParser, useUnifiedTopology 찾아보기
    );

app.use(cookieParser());
app.use(bodyParser());
app.use(session({
    secret:`keyboard cat`,
    resave: false,
    saveUninitialized: true ,
    store: new MongoStroe({
        //mongooseConnection:mongoose.connection
        url:MONGODB_URL,
        collection: "sessions",
    })

}));

app.use("/", express.static(path.resolve(__dirname, "../public")));
app.use("/menu-bar/:name", express.static(path.resolve(__dirname, "../public")));


app.post('/joinus', (req, res, next) => {
    const m_id = req.param(`m-id`);
    const m_pwd = req.param('m-pwd');
    const m_name = req.param('m-name');
    const m_age = req.param('m-age');
    const m_gender = req.param('m-gender');
    console.log(m_id, m_pwd, m_name, m_age, m_gender);
    const query = `mutation{
        addUser(input:{
            _userID: "${m_id}"
            _userPwd: "${m_pwd}"
            name: "${m_name}"
            age: ${parseInt(m_age)}
            gender: "${m_gender}"
            }){
            _userID
            _userPwd
            name
            age
            gender
            }
    }`
    request(`http://localhost:${port}/graphql`, query).then( (data) => console.log(data));
    res.redirect('/');
});

const handleLoginRequest = (URI, query) =>{
    // return new Promise((resolve, reject) =>{
    //     request(URI, query).then((data))
    // })
    let resData = request(URI, query).then( (data) => { return data });
    return resData;
}

app.post('/checked', (req, res, next)=>{
    const loginID = req.param(`login-id`);
    const loginPwd = req.param(`login-pwd`);
    console.log(loginID, loginPwd);

    let query = `{
        getByIdUser(_userID:"${loginID}"){
            _userID
            _userPwd
        }
    }`;
    const resData = handleLoginRequest(`http://localhost:${port}/graphql`,query);
    resData.then((result) => {
        if(result.getByIdUser._userID === loginID && result.getByIdUser._userPwd === loginPwd){
            console.log(`test`);
            req.session.logined = true;
            req.session.userID = loginID;
            res.redirect('/');
        }
        else{
            res.redirect('/');
        }
    })
    //res.redirect('/');
});

app.get("/logout", (req, res, next)=>{
    req.session.destroy();
    res.redirect('/');
});

app.get('/sessionChecked', (req, res, next)=>{
    console.log(req.session.logined, req.session.userID);

    if(req.session.logined){
        const jsonSession = {
            status:{
                logined: req.session.logined,
                userId: req.session.userID
            }
        }
        
        res.setHeader("Content-Type", "text/json")
        res.json(JSON.stringify(jsonSession));
    }else
    {
        res.redirect('/');
    }
});

app.post("/upload", multerUpload.array('user-file') ,(req, res, next)=>{
    const files = req.files;
    console.log(files);
    files.forEach((data)=>{
        console.log(data.originalname);
    })
    res.redirect('/');
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(port,()=>{
    console.log(`"Welecom to JKGallery Server!"
    Plz Connect http:localhost:${port}`);
})