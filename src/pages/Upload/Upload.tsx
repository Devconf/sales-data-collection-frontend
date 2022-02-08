import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import Nevigation from '@components/templates/Nevigation';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Upload.style';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../states/UserState';
import UploadTable from '../../components/templates/UploadTable/UploadTable';
import SubmitButton from '@components/molecules/SubmitButton';

const Upload: React.FC =()=>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        history.push("/");    
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