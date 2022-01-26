import styled from 'styled-components';


export const Wrapper = styled.div`
    display: inline-block;
    background-color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.white};
    width: 280px;
    `;

export const Label = styled.label`
  display: inline-block;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 0.25rem;
    font-weight: bold;
    width: 50px;
    float: left;
    position: relative;
    top: 9px;
  `;

export const InputWrapper = styled.div`
    display: inline-block;
    font-size: 1rem;
    color: ${({theme}) => theme.colors.main};
    margin-bottom: 0.25rem;
    font-weight: bold;
    width: 220px;
    `;

  