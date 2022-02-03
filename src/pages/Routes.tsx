import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Sales from '@pages/Sales';
import Upload from '@pages/Upload';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={LogIn} />
      <Route path={'/signUp'} exact component={SignUp} />
      <Route path={'/sales'} exact component={Sales}/>
      <Route path={'/sales/upload'} exact component={Upload}/>
    </BrowserRouter>
  );
};

export default Routes;