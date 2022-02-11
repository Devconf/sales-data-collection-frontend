import React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';
import Sales from '@pages/Sales/Sales';

interface PrivateRouteProps extends RouteProps {
    role: string;
    component: any
}

export const PrivateRoute = (props: PrivateRouteProps) => {

    const history = useHistory();
    const {component, role, ...rest}  = props

    console.log(role);
    if(role === "ADMIN"){
        return <Route {...rest}  exact component={Sales}/>
    }
    else{
        alert("페이지 접근 권한이 없습니다.");
        history.goBack();
        return null;
    }
  
}