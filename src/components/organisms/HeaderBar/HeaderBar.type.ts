import { ButtonProps } from "@components/atoms/Button/Button.type";

export interface HeaderbarProps extends ButtonProps{
    login?: boolean;
    title: string;
    bgColor?: string;
    height?: string;
    color?: string;
    titleSize?: string;
  }