import React from 'react';
import { Link } from 'react-router-dom';

const HandleLoginedForm = ({userid}, {_handleLogoutButton}) => {
    return (
        <div className="login-form">
            환영합니다 {userid}님!
            <Link to="/write/paper"><button>글쓰기</button></Link>
            <form action="/logout">
                <input type="submit" value="로그아웃" onClick={_handleLogoutButton}></input>
            </form>
        </div>
    );
};

export default HandleLoginedForm;