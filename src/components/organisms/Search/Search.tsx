import React from 'react';
import { Wrapper} from '@components/organisms/Search/Search.style';
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import SearchButton from '@components/molecules/SearchButton';
import { SearchProps } from '@components/organisms/Search/Search.type';



const Search: React.FC<SearchProps>= ({...searchProps})=>{

    return(
        <Wrapper>
            <InputWithLabel {...searchProps}></InputWithLabel>
            <SearchButton onClick={searchProps.onButtonClick}>검색</SearchButton>
        </Wrapper>
    )
}

export default Search;