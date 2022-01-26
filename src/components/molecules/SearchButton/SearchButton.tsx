import React from 'react';
import { SearchButtonProps } from './SearchButton.type';
import { ButtonWrapper } from './SearchButton.style';
import Button from '@components/atoms/Button';

const SearchButton: React.FC<SearchButtonProps> = ({children,...ButtonProps}) =>{
    
    return(
        <ButtonWrapper>
            <Button {...ButtonProps}>{children}</Button>
        </ButtonWrapper>
    )
}

export default SearchButton;