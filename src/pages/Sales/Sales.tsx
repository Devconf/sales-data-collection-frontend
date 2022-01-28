import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Sales.style';

const Sales: React.FC =()=>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        history.push("/");
    }


    return(
        <Wrapper>
            <HeaderBar title='매출액 자료 수집'>
                <Button onClick={onClickLogOutButton}>로그아웃</Button>
            </HeaderBar>
        </Wrapper>
    )
}

export default Sales;