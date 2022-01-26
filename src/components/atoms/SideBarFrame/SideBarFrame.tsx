import React from 'react';
import { SideBarFrameProps } from './SideBarFrame.type'
import { StyledSideBar, StyledSideBarBody, StyledSideBarHeader } from './SideBarFrame.style';

const SideBarFrame: React.FC<SideBarFrameProps> = ({header,body}) =>{

    return (
        <StyledSideBar>
            <StyledSideBarHeader>{header}</StyledSideBarHeader>
            <StyledSideBarBody>{body}</StyledSideBarBody>
        </StyledSideBar>

    )
}

export default SideBarFrame;