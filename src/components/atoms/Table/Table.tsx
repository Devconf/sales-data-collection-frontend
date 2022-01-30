import React, { useImperativeHandle } from 'react';
import { TableInstance, useFilters, useRowSelect, useSortBy, useTable } from 'react-table';
import { StyledTable, Td, Th, Tr } from './Table.style';
import { TableDataType, TableProps } from './Table.type';

const Table = React.forwardRef<TableInstance<TableDataType>,TableProps>(
    ({columns, data}, ref) =>{
        const instance = useTable(
            {
                columns,
                data
            },
            useFilters,
            useSortBy,
            useRowSelect,
        );

        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
          } = instance;

          /*useEffect(() => {
            setFilter('companyName',filter); // Set the Global Filter to the filter prop.
          }, [filter, setFilter]);
          */
          useImperativeHandle(ref, () => instance
          );
          
          return (
            <>
              <StyledTable {...getTableProps()}>
                <thead>
                  {headerGroups.map((headerGroup,index) => (
                    <Tr {...headerGroup.getHeaderGroupProps()} key={index}>
                      {headerGroup.headers.map((column,headIdx) => (
                        <Th
                          {...column.getHeaderProps()}
                          key={headIdx}
                        >
                          {column.render('Header')}
                        </Th>
                      ))}
                    </Tr>
                  ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                  {rows.map((row, rowIdx) => {
                    prepareRow(row);
                    return (
                      <Tr {...row.getRowProps()} key={rowIdx}>
                        {row.cells.map((cell,cellIdx) => {
                          return (
                            <Td {...cell.getCellProps()} key={cellIdx}>
                              {cell.render('Cell')}
                            </Td>
                          );
                        })}
                      </Tr>
                    );
                  })}
                </tbody>
              </StyledTable>
            </>
          );
    } 
);

export default Table;
