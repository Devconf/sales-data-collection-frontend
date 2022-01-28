import MainFrame from '@components/atoms/MainFrame';
import React from 'react';
import { MainProps } from './Main.type';


const Main: React.FC<MainProps> = ({...props}) =>{
    return(
        <>
            <MainFrame header={props.title} body= {props.children}/>
        </>
    )
}

export default Main;