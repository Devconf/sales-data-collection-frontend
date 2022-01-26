import React from 'react';
import { ListMenuProps } from './ListMenu.type';
import { StyledLink, Wrapper } from './ListMenu.style';

const ListMenu: React.FC<ListMenuProps> = ({menus}) =>{
   
    return(
        <>
            {menus.map((menu,idx) =>{
                return(
                    <Wrapper>
                        <StyledLink to={menu.path} key={idx}>
                            <p>{menu.name}</p>
                        </StyledLink>
                    </Wrapper>
                )}
            )}
        </>
    )
}

export default ListMenu;