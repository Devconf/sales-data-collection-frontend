import React, { useState } from 'react';

import { ButtonWrapper, StyledInput, Wrapper } from './UploadButton.style';
import { UploadButtonProps } from './UploadButton.type';
import Button from '@components/atoms/Button';

const UploadButton: React.FC<UploadButtonProps> = ({files, setFiles, removeFiles, setSelection})=>{

    const hiddenFileInput = React.useRef(null);

    const handleUploadClick = () => {
        hiddenFileInput.current.click();
    };

    const handleRemoveClick = () => {
        let removeFile = [];
        removeFiles.forEach(idx =>{
            removeFile.push(files[idx]);
        });
        
        removeFile.forEach(toRemove =>{
            const removeIdx = files.findIndex(file => file === toRemove);
            if (removeIdx > -1) files.splice(removeIdx, 1);
        });

        setFiles([...files]);
        setSelection([]);
    };


    const handleChange = (event) => {
        const uploadFile = event.target.files;
        if(uploadFile.length !== 0){
            if(checkFileExtention(uploadFile[0])){
                setFiles([...files,uploadFile[0]]);
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
                <Button onClick={handleUploadClick}>
                    파일 업로드
                </Button>
            </ButtonWrapper>
            <ButtonWrapper>
                <Button onClick={handleRemoveClick}>
                    선택 삭제
                </Button>
            </ButtonWrapper>
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