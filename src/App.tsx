import React from 'react';
import Button from '@components/atoms/Button';
import LonginInput from '@components/molecules/InputText';
import SearchInput from '@components/molecules/InputTextWithLabel';

const App: React.FC = () => {

    const btnClick = () => {
        console.log("버튼");
    }

    return (
        <>
            <div>
                <LonginInput type='text' placeholder='회사명' text-align='center'></LonginInput>
            </div>
            <div>
                <SearchInput label='회사명' type='text' placeholder='회사명' text-align='center'></SearchInput>
            </div>


            <div>
                <Button onClick={btnClick}>클릭</Button>
            </div>
        </>
    );
};

export default App;