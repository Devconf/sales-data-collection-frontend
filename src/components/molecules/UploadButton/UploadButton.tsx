import React from 'react';

import { ButtonWrapper, StyledInput, SubmitButtonWrapper, Wrapper } from './UploadButton.style';
import { UploadButtonProps } from './UploadButton.type';
import Button from '@components/atoms/Button';

const UploadButton: React.FC<UploadButtonProps> = ({files, setFiles, onClickRemove, onClickSubmit})=>{

    const hiddenFileInput = React.useRef(null);

    const onClickUpload = () => {
        hiddenFileInput.current.click();
    };

    const handleChange = (event) => {
        const uploadFile = event.target.files;
        if(uploadFile.length !== 0){
            if(checkFileExtention(uploadFile[0])){
                setFiles([...files,uploadFile[0]]);
                event.target.value = ''; // 이걸 해주지 않으면 업로드 파일 지우고 같은걸로 다시 올렸을겨웅 deadLock이 발생한다.
            }
            else{
                alert("xlsx 또는 xls 파일만 업로드 가능합니다.")
            }
        }
      };

    const checkFileExtention = (file:File) =>{
        const extention = file.name.split('.').pop();
        if(extention === 'xlsx' || extention === 'xls'){
            return true;
        }
    }

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={onClickUpload}>
                    파일 업로드
                </Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button onClick={onClickRemove}>
                    선택 삭제
                </Button>
            </ButtonWrapper>
            <SubmitButtonWrapper>
                <Button onClick={onClickSubmit}>
                    제출
                </Button>
            </SubmitButtonWrapper>
            <StyledInput 
                type="file"
                ref={hiddenFileInput}
                onChange={handleChange}
            >
            </StyledInput>
        </Wrapper>
    );
}

export default UploadButton;