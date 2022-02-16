import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import Nevigation from '@components/templates/Nevigation';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Upload.style';
import UploadTable from '../../components/templates/UploadTable/UploadTable';


const Upload: React.FC =()=>{
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
            <UploadTable />
        </Wrapper>
    )
}

export default Upload;