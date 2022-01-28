import React from 'react';
import { Wrapper, StyledHeader, StyledBody, StyledLine, StyledTitle} from './MainFrame.style';
import { MainFrameProps } from './MainFrame.type';

const MainFrame: React.FC<MainFrameProps> = ({header, body}) =>{

    return(
        <Wrapper>
            <StyledHeader>
                <StyledTitle>{header}</StyledTitle>
            </StyledHeader>
            <StyledLine></StyledLine>
            <StyledBody>
                {body}
            </StyledBody>
        </Wrapper>

    )
}

export default MainFrame;