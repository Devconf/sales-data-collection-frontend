import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import LogIn from '@pages/LogIn';
import SignUp from '@pages/SignUp';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route path={'/'} exact component={LogIn} />
      <Route path={'/signUp'} exact component={SignUp} />
    </BrowserRouter>
  );
};

export default Routes;