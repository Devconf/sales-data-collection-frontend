import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Sales from '@pages/Sales';
import Upload from '@pages/Upload';
import { PrivateRoute } from './PrivateRoutes';
import { useRecoilValue } from 'recoil';
import { UserState } from '../states/UserState';

const Routes: React.FC = () => {

    const LoginUser = useRecoilValue(UserState);

  return (
    <BrowserRouter>
        <Switch>
            <Route path={'/'} exact component={LogIn} />
            <Route path={'/signUp'} exact component={SignUp} />
            <PrivateRoute role={LoginUser.role} path={'/sales'} exact component={Sales}/>
            <Route path={'/sales/upload'} exact component={Upload}/>
        </Switch>
    </BrowserRouter>
  );
};

export default Routes;