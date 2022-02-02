import React, { useRef } from 'react';
import { SearchTableProps } from './SearchTable.type'
import {
    TableColumnType,
    TableDataType,
  } from '@components/atoms/Table/Table.type';
import { SearchWrapper ,TableHeader, TableBody } from './SearchTable.style';
import Search from '@components/organisms/Search';
import { TableInstance } from 'react-table';
import Table from '@components/atoms/Table/Table';
import { useInput } from '../../../hooks/UseInput';
import SearchButton from '@components/molecules/SearchButton';
import { useMutation } from 'react-query';
import { sendMailApi ,sendMailsApi } from '../../../apis/SalesAPI/sales.api';

const SearchTable: React.FC<SearchTableProps<TableColumnType,TableDataType>>= ({columns,data,label,placeholder}) =>{

    const tableInstance = useRef<TableInstance<TableDataType>>(null);

    const [{companyName}, onChangeSearchInput, resetSearchInput] =
    useInput(
        {companyName: ''}
    );

    const { mutateAsync: handleSendMail } = useMutation(sendMailApi, {
        onSuccess: ({ success, error }) => {
            if (success) {
            console.log('Mail Send OK!');
            } else {
            console.log('Mail Send Fail: ', error);
            }
        },
    });

    const { mutateAsync: handleSendMails } = useMutation(sendMailsApi, {
        onSuccess: ({ success, error }) => {
            if (success) {
            console.log('Mail Send OK!');
            } else {
            console.log('Mail Send Fail: ', error);
            }
        },
    });

    const onClickSearchButton = ()=>{
        tableInstance.current.setFilter('companyName',companyName);
        resetSearchInput();
        console.log(companyName);
    }

    const onClickBulkRequestButton =() =>{
        handleSendMails();
    }

    const onClickRequestButton =(id:number) =>{
        handleSendMail({id});
    }

    data.map((d)=>{
        d.button = <SearchButton onClick={()=>{onClickRequestButton(d.id)}}> 요청</SearchButton>
        return d;
    })

    return(
        <>
            <TableHeader>
                <SearchWrapper>
                    <Search 
                        label={label} 
                        placeholder={placeholder} 
                        value={companyName}
                        name="companyName"
                        onChange={onChangeSearchInput}
                        onButtonClick={onClickSearchButton}
                        >
                    </Search>
                    <SearchButton onClick={onClickBulkRequestButton}>일괄요청</SearchButton>      
                </SearchWrapper>
            </TableHeader>
            <TableBody>
                <Table 
                columns={columns}
                data={data}
                ref={tableInstance}/>
            </TableBody>
        </>
    );
}

export default SearchTable;