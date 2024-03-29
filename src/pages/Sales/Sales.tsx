import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import Nevigation from '@components/templates/Nevigation';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Sales.style';
import SearchTable from '@components/templates/SearchTable';
import { TableColumnType } from '@components/atoms/Table/Table.type';
import { getUserListApi } from '../../apis/SalesAPI/sales.api';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../states/UserState';

const Sales: React.FC =()=>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        localStorage.removeItem("recoil-persist");
        history.push("/login");
        window.location.reload();
    }

    const [page,setPage] =useState(1);
    const [user, setUser] =useState([]);

    const LoginUser = useRecoilValue(UserState);
    
    const token = LoginUser.token;

    useEffect(() =>{
        console.log("hello");
        handlePage({token, page});
    },[page]);

    const { mutateAsync: handlePage } = useMutation(getUserListApi, {
        onSuccess: ({ success, error, userList}) => {
            if (success) {
                console.log(userList);
                setUser(userList);
            console.log('getUserList Success!');
            } else {
            console.log('getUserList failed: ', error);
            }
        },
        });


    const columns: TableColumnType[] = React.useMemo(
        () => [
          {
            Header: 'ID',
            accessor: 'id'
          },
          {
            Header: '회사명',
            accessor: 'companyName',
          },
          {
            Header: '사업자번호',
            accessor: 'businessNum',
          },
          {
            Header: '이메일',
            accessor: 'email',
          },
          {
            Header: '자료요청',
            accessor: 'button',
          }          
        ],
        [],
      );

    return(
        <Wrapper>
            <HeaderBar title='매출액 자료 수집'>
                <Button onClick={onClickLogOutButton}>로그아웃</Button>
            </HeaderBar>
            <Nevigation></Nevigation>
            <SearchTable label='검색' placeholder='회사명을 입력하세요' columns={columns} data={user}/>
        </Wrapper>
    )
}

export default Sales;