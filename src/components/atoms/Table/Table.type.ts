import React from 'react';

export type TableDataType = {
    companyName: string;
    businessNum: string;
    email: string;    
    button: React.ReactNode; // 자료 요청 버튼
  };
  
  export interface TableColumnType {
    Header: string;
    accessor: keyof TableDataType;
  }
  
  export interface TableProps {
    columns: Array<TableColumnType>;
    data: Array<TableDataType>;
    //filter: string;
    ref?: unknown;
  }