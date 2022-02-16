import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Sales from '@pages/Sales';
import Upload from '@pages/Upload';
import { PrivateRoute } from './PrivateRoutes';
import { useRecoilValue } from 'recoil';
import { UserState } from '../states/UserState';
import Main from '../pages/Main';
import Download from '../pages/Download';


const Routes: React.FC = () => {

    const loginUser = useRecoilValue(UserState);

    if(loginUser !== null){
        return (
            <BrowserRouter>
                <Switch>
                    <Route 
                        path={'/'} 
                        exact 
                        render={() =>{
                            if(loginUser.role ==="ADMIN"){
                                return(
                                    <Redirect to="/sales" />
                                )
                            }
                            else if(loginUser.role ==="USER"){
                                return (
                                    <Redirect to="/sales/upload" /> 
                                )
                            }
                        }}/>
                    
                    <PrivateRoute path={'/sales'} role={loginUser.role} exact component={Sales}/>
                    <Route path={'/sales/upload'} exact component={Upload}/>
                    <Route path={'/sales/download'} exact component={Download}/>
                </Switch>
            </BrowserRouter>
            );
    }
    else{
        return (
            <BrowserRouter>
                <Route path={'/'} exact component={Main} />
                <Route path={'/login'} exact component={LogIn} />
                <Route path={'/signUp'} exact component={SignUp} />
            </BrowserRouter>
        );
    }

    
};

export default Routes;