import { InputWithLabelProps } from '@components/molecules/InputWithLabel/InputWithLabel.type';

export interface SearchProps extends InputWithLabelProps{
    onButtonClick: () => void;
}