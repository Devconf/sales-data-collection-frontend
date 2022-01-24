import React from 'react';
import { SelectProps } from './Select.type';
import { Wrapper, StyledSelect} from '@components/atoms/Select/Select.style';
import Option from '../Option';


const Select: React.FC<SelectProps> = ({...selectProps}) =>{

console.log(selectProps.defaultValue);

    return (
        <Wrapper>
            <StyledSelect value={selectProps.defaultValue} options={selectProps.options} onChange={selectProps.onChange}>{
                selectProps.options.map((option) =>(
                    <Option 
					    value={option.value}
                        defaultSelected={selectProps.defaultValue === option.name}
					    name={option.name}>
                    </Option>
                ))
            }
            </StyledSelect>
        </Wrapper>
    )
}

export default Select;