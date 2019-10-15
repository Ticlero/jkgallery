import React from 'react';

const LoginRegister = (props) => {
    console.log(props);
    return (
        <form action="/joinus" method="POST">
            <table>
                <tr>
                    <td>아이디</td>
                    <td><input type="text" name="m-id"></input></td>
                </tr>
                <tr>
                    <td>비밀번호</td>
                    <td><input type="password" name="m-pwd"></input></td>
                </tr>
                <tr>
                    <td>이름</td>
                    <td><input type="text" name="m-name"></input></td>
                </tr>
                <tr>
                    <td>나이</td>
                    <td><input type="number" name="m-age"></input></td>
                </tr>
                <tr>
                    <td>성별</td>
                    <td><input type="text" name="m-gender"></input></td>
                </tr>
                <tr>
                    <td><input type="submit" value="가입하기"></input></td>
                </tr>
            </table>
        </form>
    );
};

export default LoginRegister;