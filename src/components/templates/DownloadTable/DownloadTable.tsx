import React, { useCallback, useRef, useState} from 'react';
import { DownloadTableProps } from './DownloadTable.type';
import MainFrame from '@components/atoms/MainFrame';
import { BodyWrapper, DatePickerWrapper, SearchWrapper, TableStyle, Wrapper } from './DownloadTable.style';
import Paper from '@mui/material/Paper';
import { ExportPanel, Grid, TableHeaderRow, TableSummaryRow, Toolbar, VirtualTable} from '@devexpress/dx-react-grid-material-ui';
import { GridExporter } from '@devexpress/dx-react-grid-export';
import { useMutation } from 'react-query';
import { getSalesApi, getAllSalesApi, sendTempInviteMailApi } from '../../../apis/SalesAPI/sales.api';
import SearchButton from '@components/molecules/SearchButton';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../states/UserState';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import saveAs from 'file-saver';
import { useEffect } from 'react';
import { DataTypeProvider, IntegratedSummary, SummaryState } from '@devexpress/dx-react-grid';

const DownloadTable: React.FC<DownloadTableProps> = () =>{

    const LoginUser = useRecoilValue(UserState);

    const role = LoginUser.role;
    
    const token = LoginUser.token;

    const [start,setStartAt] = useState<Date|null>();

    const [end,setEndAt] = useState<Date|null>();

    useEffect(()=>{
        if(role === "ADMIN"){
            document.getElementById("searchAll").style.display = "inline-block";
        }
        else{
            document.getElementById("searchAll").style.display = "none";
        }
    },[]);

    const [columns] = useState([
        { name: 'userId', title: '대표회사 코드' },
        { name: 'companyName', title: '회사명' },
        { name: 'businessNum', title: '사업자번호' },
        { name: 'email', title: '이메일' },
        { name: 'totalSales', title: '매출액' },
        { name: 'operatingProfit', title: '영업이익' },
        { name: 'netIncome', title: '당기순이익'},
        { name: 'date', title: '기준일자(년월)' },
        { name: 'updateRequest', title: '수정요청' },
        ]);

    const [downloadColumns] = useState([
        { name: 'userId', title: '대표회사 코드' },
        { name: 'companyName', title: '회사명' },
        { name: 'businessNum', title: '사업자번호' },
        { name: 'email', title: '이메일' },
        { name: 'totalSales', title: '매출액' },
        { name: 'operatingProfit', title: '영업이익' },
        { name: 'netIncome', title: '당기순이익'},
        { name: 'date', title: '기준일자(년월)' },
        ]);
    
    const [rows,setRows] = useState([]); 

    const addButtonToResponsRowData = (saleList:any[]) =>{
        let resultRowList = saleList.map((sale)=>{
            sale.updateRequest = <SearchButton onClick={()=>{onClickRequestButton(sale.accessToken)}}> 요청</SearchButton>;
            return sale;
        });
        return resultRowList;
    }

    const {mutateAsync: handleGetSales} = useMutation(getSalesApi,{
        onSuccess: ({ success, error, saleList }) => {
            if (success) {
                console.log('Success!');
                setRows(saleList);
                console.log(saleList);
            } else {
                console.log('Failed: ', error);
            }
        },
    });

    const onClickRequestMyUpload =()=>{
        handleGetSales({start, end, token});
    };

    const {mutateAsync: handleGetAllSales} = useMutation(getAllSalesApi,{
        onSuccess: ({ success, error, saleList }) => {
            if (success) {
                console.log('Success!');
                setRows(saleList);
            } else {
                console.log('Failed: ', error);
            }
        },
    });

    const onClickRequestAllUpload =()=>{
        handleGetAllSales({start, end, token});
    };


    const {mutateAsync: handleSendTempInviteMail} = useMutation(sendTempInviteMailApi,{
        onSuccess: ({ success, error }) => {
            if (success) {
                console.log('Success!');
                alert("요청 완료 하였습니다.")
            } else {
                console.log('Failed: ', error);
                alert("요청 실패 하였습니다.")
            }
        },
    });

    const onClickRequestButton =(accessToken:string)=>{
        handleSendTempInviteMail({accessToken});
    };

    const exporterRef = useRef(null);

    const startExport = useCallback(() => {
      exporterRef.current.exportGrid();
    }, [exporterRef]);
    
    const onSave = (workbook) => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'DataGrid.xlsx');
        });
      };

    const [totalSummaryItems] = useState([
        { columnName: 'companyName', type: 'count' },
        { columnName: 'totalSales', type: 'sum' },
        { columnName: 'operatingProfit', type: 'sum' },
        { columnName: 'netIncome', type: 'sum' },
    ]);

    const CurrencyFormatter = ({ value }) => (
        value.toLocaleString('ko-KR', { style: 'currency', currency: 'KRW' })
      );
      
    const CurrencyTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={CurrencyFormatter}
            {...props}
        />
    );

    const [currencyColumns] = useState(['totalSales', 'operatingProfit', 'netIncome']);
    
    return(
        <MainFrame header="매출액 자료 다운로드" body={
            <BodyWrapper>
                <Wrapper>
                    <DatePickerWrapper>
                        <DatePicker 
                            dateFormat={"yyyy-MM-dd"}
                            selected={start}
                            customInput={
                                <InputWithLabel label='시작일'></InputWithLabel>}
                            onChange={(date) => setStartAt(date)}
                            withPortal
                        />
                    </DatePickerWrapper>
                    <DatePickerWrapper>
                        <DatePicker
                            dateFormat={"yyyy-MM-dd"}
                            selected={end}
                            customInput={
                                <InputWithLabel label='종료일'></InputWithLabel>}
                            onChange={(date) => setEndAt(date)}
                            withPortal
                        />
                    </DatePickerWrapper>                    
                    <SearchWrapper>
                        <SearchButton onClick ={onClickRequestMyUpload}>조회</SearchButton>
                    </SearchWrapper>
                    <SearchWrapper id='searchAll'>
                        <SearchButton onClick ={onClickRequestAllUpload}>모든 기업 조회</SearchButton>
                    </SearchWrapper>
                </Wrapper>
                <Paper>
                    <Grid
                        columns={columns}
                        rows={addButtonToResponsRowData(rows)}
                    >
                        <CurrencyTypeProvider
                             for={currencyColumns}
                        />
                        <VirtualTable
                            headComponent={props => (
                                    <VirtualTable.TableHead {...props} style={TableStyle} />
                            )}                            
                        />
                        <TableHeaderRow/>
                        <Toolbar />
                        <ExportPanel startExport={startExport} />
                        <SummaryState
                            totalItems={totalSummaryItems}
                        />
                        <IntegratedSummary />
                        <TableSummaryRow />
                    </Grid>
                    <GridExporter
                        ref={exporterRef}
                        rows={rows}
                        columns={downloadColumns}
                        onSave={onSave}
                    />
                </Paper>   
            </BodyWrapper>
        }>
        </MainFrame>
    )
}

export default DownloadTable;
