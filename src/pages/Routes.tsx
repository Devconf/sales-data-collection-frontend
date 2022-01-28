import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';
import Sales from '@pages/Sales';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={LogIn} />
      <Route path={'/signUp'} exact component={SignUp} />
      <Route path={'/sales'} exact component={Sales}/>
    </BrowserRouter>
  );
};

export default Routes;