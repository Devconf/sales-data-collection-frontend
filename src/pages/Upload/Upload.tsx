import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import Nevigation from '@components/templates/Nevigation';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Upload.style';
import Main from '@components/templates/Main';
import SearchTable from '@components/templates/SearchTable';
import { TableColumnType } from '@components/atoms/Table/Table.type';
import { data } from '@pages/dummyDate';
import { getUserListApi } from '../../apis/SalesAPI/sales.api';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../states/UserState';

const Upload: React.FC =()=>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        history.push("/");    }

    const onClickButton =() =>{
        console.log(LoginUser);
    }

    const LoginUser = useRecoilValue(UserState);

    return(
        <Wrapper>
            <HeaderBar title='매출액 자료 수집'>
                <Button onClick={onClickLogOutButton}>로그아웃</Button>
            </HeaderBar>
            <Nevigation></Nevigation>
            <Main title='매출액 자료 업로드' children={
               <Button onClick= {onClickButton}>버튼</Button>
                
            }></Main>
        </Wrapper>
    )
}

export default Upload;