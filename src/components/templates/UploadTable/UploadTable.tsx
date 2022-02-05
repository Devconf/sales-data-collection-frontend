import React, { useEffect, useRef, useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow, TableSelection, VirtualTable } from '@devexpress/dx-react-grid-material-ui';
import MainFrame from '@components/atoms/MainFrame';
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import SearchButton from '@components/molecules/SearchButton/SearchButton'
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../states/UserState';
import { BodyWrapper, LabelWrapper, Wrapper } from './UploadTable.style';
import { UploadTableProps } from './UploadTable.type';
import Input from '../../atoms/Input/Input';
import UploadButton from '../../molecules/UploadButton';
import { IntegratedSelection, SelectionState } from '@devexpress/dx-react-grid';
import { Message } from '@mui/icons-material';

const UploadTable: React.FC<UploadTableProps>= () =>{

    const [columns] = useState([
        { name: 'FileName', title: '파일명' },
        { name: 'FileSize', title: '파일 크기'},
        { name: 'LastModifyDate', title: '마지막 수정 날짜' },
        { name: 'UploadDate', title: '업로드 날짜' },
      ]);
    
    const [selection, setSelection] = useState([]);

    const [files, setFiles] = useState([]);


    const rowData = files.map((file)=>{
        const modDate = new Date(file.lastModified);
        const nowDate = new Date();
        return {
            FileName: file.name,
            FileSize: file.size,
            LastModifyDate: modDate.toISOString(),
            UploadDate: nowDate.toISOString()
        }
    });

    const LoginUser = useRecoilValue(UserState);

    return(
        <MainFrame header ="매출액 자료 업로드" body={
            <BodyWrapper>
                <Wrapper>
                    <LabelWrapper>
                        <InputWithLabel label='회사명' value={LoginUser.companyName} readOnly ={true}></InputWithLabel>
                    </LabelWrapper>
                    <LabelWrapper>
                        <InputWithLabel label='사업자번호' value={LoginUser.businessNum} readOnly ={true}></InputWithLabel>
                    </LabelWrapper>
                </Wrapper>
                <UploadButton type='file' files={files} setFiles={setFiles} removeFiles={selection} setSelection={setSelection}/>
                <Paper>
                    <Grid
                        columns={columns}
                        rows={rowData}
                    >
                        <SelectionState
                            selection={selection}
                            onSelectionChange={setSelection}
                        />
                        <IntegratedSelection />
                        <Table columnExtensions={[{'columnName':"FileName","width":'auto'}]} messages={{'noData':"파일을 업로드 하세요."}}/>
                        <TableHeaderRow />
                        <TableSelection showSelectAll />
                    </Grid>
                </Paper>
            </BodyWrapper>
        }/>
    );
}

export default UploadTable;