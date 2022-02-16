import React from 'react';
import { Wrapper } from './Download.style';
import HeaderBar from '@components/organisms/HeaderBar';
import Button from '@components/atoms/Button';
import { useHistory } from 'react-router-dom';
import Nevigation from '@components/templates/Nevigation/Nevigation';
import DownloadTable from '@components/templates/DownloadTable';

const Download : React.FC = () =>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        localStorage.removeItem("recoil-persist");
        history.push("/login");
        window.location.reload();
    }

    return(
        <Wrapper>
        <HeaderBar title='매출액 자료 수집'>
            <Button onClick={onClickLogOutButton}>로그아웃</Button>
        </HeaderBar>
        <Nevigation></Nevigation>
        <DownloadTable/>
    </Wrapper>
    );
}

export default Download;