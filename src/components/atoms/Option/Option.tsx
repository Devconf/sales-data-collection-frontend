import React from 'react';
import { StyledOption } from './Option.style';
import { OptionProps } from './Option.type';


const Option: React.FC<OptionProps> = ({value,name,defaultSelected})=>{

    return (
        <StyledOption defaultSelected={defaultSelected} value={value}>
            {name}
        </StyledOption>
    )
}

export default Option;