import React from 'react';
import  { Link } from 'react-router-dom';

const HandleLoginComponent = () => {
    return (
        <form action="/checked" method="POST">
            <div className="login-form">
                <div className="id-box">
                    <label htmlFor="id-text-box">아이디</label>
                    <input id="id-text-box" className="id-pwd-box" name="login-id" type="text" placeholder="아이디 입력"></input>
                </div>
                <div className="pwd-box">
                    <label htmlFor="pwd-text-box">비밀번호</label>
                    <input id="pwd-text-box" className="id-pwd-box" name="login-pwd" type="password" placeholder="비밀번호 입력"></input>
                </div>
                <div className="login-btn-box">
                    <input type="submit" value="로그인"></input>
                    <Link to="/login/Register"><button>회원가입</button></Link>
                </div>
            </div>
        </form>
    );
};

export default HandleLoginComponent;