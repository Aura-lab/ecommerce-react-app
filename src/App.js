import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import  SignIn from './views/SignIn/SignIn';
import SignUp from './views/SignUp/SignUp';
import MyProfile from './views/MyProfile/MyProfile';
import Zodiac from './views/Zodiac/Zodiac';
import Setting from './views/Setting/Setting';
import AppAppBar  from './views/AppAppBar/AppAppBar';
import HomePage from './views/HomePage/HomePage';

import NotFound from './views/NotFound/NotFound';

import { AuthenticationManger } from './components/Authentication/Authentication';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export default function App() {
  return (
    <BrowserRouter>
     <AppAppBar />
      <AuthenticationManger>
      
      <Switch>
      <Route exact path="/" component={HomePage} />
        <PrivateRoute exact permissions={['admin']}  path="/profile"  component={MyProfile} />
        {/* < zodiac是直接点的 不能login/> */}
        <Route exact path="/zodiac" component={Zodiac} />
        <Route exact path="/signin"  component={SignIn} />
        <Route exact path="/signup"  component={SignUp} />
        <Route exact path="/setting"  component={Setting} />
        <Route path="/*"  component={NotFound} />
      </Switch>
   

      </AuthenticationManger>

    </BrowserRouter>
  );
}
