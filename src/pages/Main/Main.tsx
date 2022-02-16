import React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@components/atoms/Button';

const Main: React.FC =() =>{
    const history = useHistory();

    const onClickLoginButton = ()=>{
        history.push("/login");
    }

    return(
        <>
            <p>메인 페이지입니다.</p>
            <Button onClick={onClickLoginButton}>로그인</Button>
        </>
    )
}

export default Main;