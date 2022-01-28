import React, { useRef } from 'react';
import { SearchTableProps } from './SearchTable.type'
import {
    TableColumnType,
    TableDataType,
  } from '@components/atoms/Table/Table.type';
import { SearchWrapper ,TableWrapper } from './SearchTable.style';
import Search from '@components/organisms/Search';
import { TableInstance } from 'react-table';
import Table from '@components/atoms/Table/Table';
import { useInput } from '../../../hooks/UseInput';
import SearchButton from '@components/molecules/SearchButton';

const SearchTable: React.FC<SearchTableProps<TableColumnType,TableDataType>>= ({columns,data,label,placeholder}) =>{

    const tableInstance = useRef<TableInstance<TableDataType>>(null);

    const [{companyName}, onChangeSearchInput, resetSearchInput] =
    useInput(
        {companyName: ''}
    );

    const onClickSearchButton = ()=>{
        tableInstance.current.setFilter('companyName',companyName);
        resetSearchInput();
        console.log(companyName);
    }

    data.map((d)=>{
        d.button = <SearchButton onClick={onClickSearchButton}> 요청</SearchButton>
        return d;
    })

    return(
        <>
            <SearchWrapper>
                <Search 
                    label={label} 
                    placeholder={placeholder} 
                    value={companyName}
                    name="companyName"
                    onChange={onChangeSearchInput}
                    onButtonClick={(onClickSearchButton)}
                    >
                </Search>      
            </SearchWrapper>
            <TableWrapper>
                <Table 
                columns={columns}
                data={data}
                ref={tableInstance}/>
            </TableWrapper>
        </>
    );
}

export default SearchTable;