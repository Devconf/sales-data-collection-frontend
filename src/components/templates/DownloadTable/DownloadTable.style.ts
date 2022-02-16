import styled, {CSSProperties} from 'styled-components';

export const BodyWrapper = styled.div`
    position: relative;
    left: 50px;
    width: 90%;
`

export const Wrapper = styled.div`
    height:100px;
`

export const LabelWrapper = styled.div`
    width:350px;
    height:50px;
    position: relative;
    left: 0px;
    top: 60px
`

export const DatePickerWrapper =styled.div`
    display: inline-block;
    position: relative;
    height: 40px;
    top : 50px;
`

export const SearchWrapper =styled.div`
    display: inline-block;
    position: relative;
    height: 40px;
    top : 50px;
    padding-right: 10px;
`

export const TableStyle: CSSProperties = {
    zIndex:2,
    position: "sticky"
};


