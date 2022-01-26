import React from 'react';
import { Wrapper} from '@components/organisms/Search/Search.style';
import InputWithLabel from '@components/molecules/InputWithLabel/InputWithLabel';
import SearchButton from '@components/molecules/SearchButton';
import { SearchProps } from '@components/organisms/Search/Search.type';



const Search: React.FC<SearchProps>= ({children,...searchProps})=>{

    return(
        <Wrapper>
            <InputWithLabel {...searchProps}></InputWithLabel>
            <SearchButton>{children}</SearchButton>
        </Wrapper>
    )
}

export default Search;