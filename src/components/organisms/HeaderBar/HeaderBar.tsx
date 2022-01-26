import React from 'react';
import { StyledHeaderBar, StyledButtonArea, StyledTitle } from './HeaderBar.style';
import { HeaderbarProps } from './HeaderBar.type';

const HeaderBar: React.FC<HeaderbarProps> = ({
    ...headerBarProps
  })=>{

    return(
        <StyledHeaderBar
      login={headerBarProps.login}
      bgColor={headerBarProps.bgColor}
      height={headerBarProps.height}
    >
      <StyledTitle color={headerBarProps.color} titleSize={headerBarProps.titleSize}>
        {headerBarProps.title}
      </StyledTitle>
      <StyledButtonArea>{headerBarProps.children}</StyledButtonArea>
    </StyledHeaderBar>
    )
}

export default HeaderBar;