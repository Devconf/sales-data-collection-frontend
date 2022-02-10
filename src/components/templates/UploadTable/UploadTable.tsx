import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { Grid, Table, TableHeaderRow, TableSelection} from '@devexpress/dx-react-grid-material-ui';
import MainFrame from '@components/atoms/MainFrame';
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../states/UserState';
import { BodyWrapper, LabelWrapper, Wrapper } from './UploadTable.style';
import { UploadTableProps } from './UploadTable.type';
import UploadButton from '../../molecules/UploadButton';
import { IntegratedSelection, SelectionState } from '@devexpress/dx-react-grid';
import { useMutation } from 'react-query';
import { uploadFileApi } from '../../../apis/SalesAPI/sales.api';

const UploadTable: React.FC<UploadTableProps>= () =>{

    
    const [selection, setSelection] = useState([]);

    const [files, setFiles] = useState([]);

    const LoginUser = useRecoilValue(UserState);
    
    const token = LoginUser.token;


    const [columns] = useState([
        { name: 'FileName', title: '파일명' },
        { name: 'FileSize', title: '파일 크기'},
        { name: 'LastModifyDate', title: '마지막 수정 날짜' },
        { name: 'UploadDate', title: '업로드 날짜' },
      ]);

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

    

    const onClickSubmit = () =>{
        hadleUploadFile({token, files});
        console.log("제출");
    }

    const onClickRemove = () => {
        let removeFile = [];
        selection.forEach(idx =>{
            removeFile.push(files[idx]);
        });
        
        removeFile.forEach(toRemove =>{
            const removeIdx = files.findIndex(file => file === toRemove);
            if (removeIdx > -1) files.splice(removeIdx, 1);
        });
        setFiles([...files]);
        setSelection([]);
    };

    const { mutateAsync: hadleUploadFile } = useMutation(uploadFileApi, {
        onSuccess: ({ success, error }) => {
            if (success) {
                console.log('uploadFile Success!');
            } else {
                console.log('uploadFile failed: ', error);
            }
        },
        });

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
                <UploadButton 
                    type='file' 
                    files={files} 
                    setFiles={setFiles} 
                    onClickRemove={onClickRemove}
                    onClickSubmit={onClickSubmit}/>
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