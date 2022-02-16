import SideBarFrame from '@components/atoms/SideBarFrame';
import React from 'react';
import { NevigationProps } from './Nevigation.type';
import ListMenu from '@components/molecules/ListMenu';

const Nevigation: React.FC<NevigationProps> = () =>{

    const menus = [
        { name: '매출액 자료 요청', path: '/sales', },
        { name: '매출액 자료 다운로드', path: '/sales/download' },
        { name: '매출액 자료 업로드', path: '/sales/upload' }
      ];

    return(
        <>
            <SideBarFrame header= {'매출 관리'}
            body ={
                <ListMenu menus={menus}/>
            }
            >
            </SideBarFrame>
        </>
    )
}

export default Nevigation;