import Button from '@components/atoms/Button';
import HeaderBar from '@components/organisms/HeaderBar/HeaderBar';
import Nevigation from '@components/templates/Nevigation';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Wrapper } from './Sales.style';
import Main from '@components/templates/Main';
import SearchTable from '@components/templates/SearchTable';
import { TableColumnType } from '@components/atoms/Table/Table.type';
import { data } from '@pages/dummyDate';

const Sales: React.FC =()=>{
    const history = useHistory();

    const onClickLogOutButton =() =>{
        history.push("/");
    }


    const columns: TableColumnType[] = React.useMemo(
        () => [
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
            <Main title='매출액 자료 요청' children={
               <SearchTable label='검색' placeholder='회사명을 입력하세요' columns={columns} data={data}>
                   검색
               </SearchTable>
                
            }></Main>
        </Wrapper>
    )
}

export default Sales;