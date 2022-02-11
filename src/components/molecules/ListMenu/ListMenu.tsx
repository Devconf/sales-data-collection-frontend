import React from 'react';
import { ListMenuProps } from './ListMenu.type';
import { StyledLink, Wrapper } from './ListMenu.style';
import { useHistory } from 'react-router-dom';



const ListMenu: React.FC<ListMenuProps> = ({menus}) =>{

    const history = useHistory();

    const onNavigationButtonClick = (path:string) =>{
        history.push(path);
    }

    return(
        <>
            {menus.map((menu,idx) =>{
                const path = menu.path;
                return(
                    <Wrapper>
                        <StyledLink onClick={() => {onNavigationButtonClick(path);}}>
                            <p>{menu.name}</p>
                        </StyledLink>
                    </Wrapper>
                )}
            )}
        </>
    )
}

export default ListMenu;