import styled from 'styled-components';
import { OptionProps } from './Option.type';

type StyledOptionProps = Pick<OptionProps, 'value'|'name'|'defaultSelected'>;



export const StyledOption = styled.option<StyledOptionProps>`
`