import React, { useEffect, useState } from 'react';
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import {LabelWrapper, InputWithLabelWrapper,ButtonWrapper,ErrorMessage} from './SaleModify.style'
import { SaleModifyProps } from './SaleModify.type';
import { getSaleWithAccessTokenApi, saleUpdatedApi} from '../../apis/SalesAPI/sales.api';
import { useMutation } from 'react-query';
import queryString from 'query-string';
import LoginButton from '@components/molecules/LoginButton';
import { useMultipleInputs } from '../../hooks/UseMultipleInputs';
import {
    emailValidation,
    numberValidation,
    dateValidation
  } from '../../lib/helpers/Validation';


const SaleModify: React.FC<SaleModifyProps> =({location}) =>{

    const query = queryString.parse(location.search);

    const accessToken = query["id"];

    const [saleInfo,setSaleInfo] = useState<any>({saleManageId:0,companyName:"",businessNum:"",email:"",totalSales:0,netIncome:0,operatingProfit:0,date:""});

    const saleManageId = saleInfo.saleManageId;
    const companyName =saleInfo.companyName;
    const businessNum =saleInfo.businessNum;

    useEffect(()=>{
        handleGetSale({accessToken});
    },[]);    

    useEffect(()=>{
        resetInputs();
    },[saleInfo]);  


    const { mutateAsync: handleGetSale } = useMutation(getSaleWithAccessTokenApi, {
        onSuccess: ({ success, error, saleInfo}) => {
            if (success) {
                console.log('getSale Success!');
                setSaleInfo(saleInfo);
            } else {
                console.log('getSale failed: ', error);
            }
        },
    });

    const [{email,totalSales,netIncome,operatingProfit,date}, onChangeInputs, resetInputs] =
    useMultipleInputs({
        email: saleInfo["email"],
        totalSales: saleInfo["totalSales"],
        netIncome: saleInfo["netIncome"],
        operatingProfit: saleInfo["operatingProfit"],
        date: saleInfo["date"]
    });

    const [error, setError] = useState({
        email: '',
        totalSales: '',
        netIncome: '',
        operatingProfit: '',
        date: ''
    });
  
    const resetError = () => {
        setError({
            email: '',
            totalSales: '',
            netIncome: '',
            operatingProfit: '',
            date: ''
        })
    };

    const onUpdateSubmit = ()=>{
        console.log(saleInfo);
        const emailError = emailValidation(email);
        const totalSalesError = numberValidation(totalSales);
        const netIncomeError = numberValidation(netIncome);
        const operatingProfitError = numberValidation(operatingProfit);
        const dateError =dateValidation(date);

        setError({
            ...error,
            email: emailError,
            totalSales: totalSalesError,
            netIncome: netIncomeError,
            operatingProfit: operatingProfitError,
            date: dateError
          });
          if (emailError === '' && 
              totalSalesError === '' &&
              netIncomeError === '' &&
              operatingProfitError === '' &&
              dateError === '') {
              hadleSubmit({saleManageId, companyName, businessNum, email, totalSales, netIncome, operatingProfit, date, accessToken});
          }
    }

    const { mutateAsync: hadleSubmit } = useMutation(saleUpdatedApi, {
        onSuccess: ({ success, error}) => {
            if (success) {
                console.log('getSale Success!');
            } else {
                console.log('getSale failed: ', error);
            }
        },
    });


    return(
        <>
            <InputWithLabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='회사명' 
                        value={companyName} 
                        readOnly={true}>
                    </InputWithLabel>
            </LabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='사업자번호' 
                        value={businessNum} 
                        readOnly={true}>
                    </InputWithLabel>
            </LabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='이메일' 
                        value={email} 
                        onChange={onChangeInputs}
                        name={"email"}>
                    </InputWithLabel>
                    <ErrorMessage>{error.email}</ErrorMessage>
            </LabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='매출액' 
                        value={totalSales} 
                        onChange={onChangeInputs}
                        name={"totalSales"}>
                    </InputWithLabel>
                    <ErrorMessage>{error.totalSales}</ErrorMessage>
            </LabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='영업이익' 
                        value={netIncome} 
                        onChange={onChangeInputs}
                        name={"netIncome"}>
                    </InputWithLabel>
            </LabelWrapper>
            <ErrorMessage>{error.netIncome}</ErrorMessage>
            <LabelWrapper>
                <InputWithLabel 
                        label='당기순이익'  
                        value={operatingProfit} 
                        onChange={onChangeInputs}
                        name={"operatingProfit"}>    
                    </InputWithLabel>
                    <ErrorMessage>{error.operatingProfit}</ErrorMessage>
            </LabelWrapper>
            <LabelWrapper>
                <InputWithLabel 
                        label='기준일자(년월)' 
                        value={date} 
                        onChange={onChangeInputs} 
                        name={"date"}>
                    </InputWithLabel>
                    <ErrorMessage>{error.date}</ErrorMessage>
            </LabelWrapper>           
            </InputWithLabelWrapper>
            <ButtonWrapper>
                <LoginButton rect onClick={onUpdateSubmit}>수정</LoginButton>
            </ButtonWrapper>
        </>
        
    )
}

export default SaleModify;