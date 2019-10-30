import React from 'react';

const WritePaper = () => {
    return (
        <div className="write-paper-frame">
            <form action="/upload" method="POST" encType="multipart/form-data" >
                <table>
                    <thead>
                        <tr>
                            <td>
                                <h3>사진 올리기</h3>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="contents-title">제목</td>
                            <td className="contents-input"><input type="text" className="contents-title-stroy-input" name="contents-title" placeholder="제목을 입력하세요"></input></td>
                        </tr>
                        <tr>
                            <td className="contents-stroy">내용</td>
                            <td className="contents-input"><textarea className="contents-title-stroy-input" name="contents-story" placeholder="사진속 스토리를 입력해주세요~" rows="20"></textarea></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>
                                <div className="submit-btn">
                                    <input type="file" name="contents-user-file" multiple></input>
                                    <input type="submit" value="upload"></input>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </form>
        </div>
    );
};

export default WritePaper;