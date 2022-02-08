import { InputProps } from "../../atoms/Input/Input.type";

export interface UploadButtonProps extends InputProps{
    files:any[];
    setFiles: React.Dispatch<React.SetStateAction<any[]>>;
    onClickSubmit: () =>void;
    onClickRemove: () =>void;
}