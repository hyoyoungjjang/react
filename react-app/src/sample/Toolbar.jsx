import React from 'react'

const Toolbar = (props) => {
    const{isLogin, setIsLogin, setIsLogout} = props;

    return (
    <div>
        {isLogin && <div style={{padding: 24}}>안녕하세요 김효영님</div>}
        {isLogin ? 
        <button onClick={setIsLogout}>로그아웃</button> : 
        <button onClick={setIsLogin}>로그인</button> 
        }
    </div>
    )
}

export default Toolbar